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
 * @param {Array} props.savedMovies Список сохраненных фильмов
 * @param {Function} props.onActionMovie Сохранить/удалить фильм
 * @param {Boolean} props.isSavedMovies Состояние меняет компонент
 * с поиска фильмов на сохраненные фильмы
 * @returns {React.ReactElement}
 */
function MoviesCard({
  movie,
  savedMovies,
  onActionMovie,
  isSavedMovies,
}) {
  // Состояние добавление фильма в профиль.
  const [isSave, setIsSave] = useState(false);

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
  } = movie;

  /**
   * Функция преобразовывает путь до фотографии из относительного
   * в абсолютный.
   *
   * @param {String} url Относительный путь до фотографии
   * @returns {String}
   */
  function createAbsoluteImageUrl(url) {
    return !url.includes('https://')
      ? `https://api.nomoreparties.co${url}`
      : url;
  }

  /**
   * Функция преобразовывает минуты в строку продолжительность фильма.
   *
   * @param {Number} minutes Минуты из БД
   * @returns {String}
   */
  function getTime(minutes) {
    return minutes < 60
      ? `${minutes % 60}м`
      : `${Math.floor(minutes / 60)}ч${minutes % 60}м`;
  }

  /**
   * Функция обрабатывает запрос на сохранение фильма.
   *
   * @returns {void}
   */
  function handleSaveMovie() {
    if (!isSave && !isSavedMovies) {
      mainApi.saveMovie({
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
      })
        .then((savedMovie) => {
          setIsSave(true);
          onActionMovie(savedMovie.data, true);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err.message));
    } else {
      mainApi.deleteMovie(isSavedMovies ? movie.movieId : id)
        .then((deleteMovie) => {
          setIsSave(false);
          onActionMovie(deleteMovie.data);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err.message));
    }
  }

  useEffect(() => {
    if (savedMovies !== null) {
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
          src={isSavedMovies ? image : createAbsoluteImageUrl(image.url)}
          alt={`Кадр из фильма «${nameRU}»`}
          className="movies-card__image"
        />
      </Link>
      {isSavedMovies
        ? (
          <button
            type="button"
            aria-label="Удалить фильм"
            onClick={handleSaveMovie}
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
  movie: PropTypes.object.isRequired,
  onActionMovie: PropTypes.func.isRequired,
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  isSavedMovies: PropTypes.bool,
};

MoviesCard.defaultProps = {
  isSavedMovies: false,
  savedMovies: null,
};

export default MoviesCard;
