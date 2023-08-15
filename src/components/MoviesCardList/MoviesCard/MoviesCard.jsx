import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MoviesCard.css';

import mainApi from '../../../utils/MainApi';

/**
 * Компонент одной карточки фильма.
 *
 * @param {Object} props
 * @param {Object} props.movie Информация о фильме
 * @param {Boolean} props.isDeleteButton Состояние, меняет кнопку
 * "Сохранить фильм" на "Удалить фильм".
 * @returns {React.ReactElement} MoviesCardList
 */
function MoviesCard({
  movie,
  isDeleteButton,
  onActionMovie,
  savedMovies,
}) {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
    // saved,
  } = movie;

  const [isSave, setIsSave] = useState(false);

  /**
   * Функция преобразовывает путь до фотографии из относительного
   * в абсолютный.
   *
   * @param {String} url Относительный путь до фотографии
   * @returns {String}
   */
  function createAbsoluteImageUrl(url) {
    if (!url.includes('https://')) {
      return `https://api.nomoreparties.co${url}`;
    }

    return url;
  }

  const movieData = {
    country,
    director,
    duration,
    year,
    description,
    image: createAbsoluteImageUrl(image.url),
    trailerLink,
    thumbnail: createAbsoluteImageUrl(image.formats.thumbnail.url),
    movieId: id,
    nameRU,
    nameEN,
  };

  /**
 * Функция преобразовывает минуты в строку продолжительность фильма.
 *
 * @param {Number} minutes Минуты из БД
 * @returns {String}
 */
  function getTime(minutes) {
    if (minutes < 60) {
      return `${minutes % 60}м`;
    }

    return `${Math.floor(minutes / 60)}ч${minutes % 60}м`;
  }

  /**
   * Функция обрабатывает запрос на сохранение фильма.
   *
   * @returns {void}
   */
  function handleSaveMovie() {
    if (!isSave) {
      mainApi.saveMovie(movieData)
        .then((savedMovie) => {
          setIsSave(true);
          onActionMovie(savedMovie.data, true);
        })
        .catch((err) => console.log(err.message));
    } else {
      mainApi.deleteMovie(id)
        .then((deleteMovie) => {
          setIsSave(false);
          onActionMovie(deleteMovie.data, false);
        })
        .catch((err) => console.log(err.message));
    }
  }

  useEffect(() => {
    if (savedMovies) {
      savedMovies.forEach((saveMovie) => {
        if (saveMovie.movieId === movie.id) {
          setIsSave(true);
        }
      });
    }
  }, [movie.id, savedMovies]);

  return (
    <article className="movies-card">
      <Link
        to={trailerLink}
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <div className="movies-card__container">
          <div className="movies-card__info">
            <h3 className="movies-card__name">
              {nameRU}
            </h3>
            <p className="movies-card__duration">
              {getTime(duration)}
            </p>
          </div>
        </div>
        <img
          src={createAbsoluteImageUrl(image.url)}
          alt={`Кадр из фильма «${nameRU}»`}
          className="movies-card__image"
        />
      </Link>
      {isDeleteButton
        ? (
          <button
            type="button"
            aria-label="Удалить фильм"
            className="movies-card__button movies-card__button_icon_delete link"
          >
          </button>
        )
        : (
          <button
            type="button"
            aria-label="Сохранить фильм"
            onClick={handleSaveMovie}
            className={`movies-card__button link ${isSave && 'movies-card__button_active'}`}
          >
          </button>
        )}
    </article>
  );
}

MoviesCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object.isRequired,
  onActionMovie: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  savedMovies: PropTypes.array.isRequired,
  isDeleteButton: PropTypes.bool,
};

MoviesCard.defaultProps = {
  isDeleteButton: false,
};

export default MoviesCard;
