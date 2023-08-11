import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './MoviesCardList.css';
import MoviesCard from './MoviesCard/MoviesCard';
import { tabletWidth, mobileWidth } from '../../utils/screenWidthConstants';

/**
 * Компонент, который управляет отрисовкой карточек
 * фильмов на страницу и их количеством.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов.
 * @param {Boolean} props.isDeleteButton Состояние, меняет кнопку "Сохранить фильм"
 * на "Удалить фильм", передается дальше в MoviesCard
 * @returns {React.ReactElement} <MoviesCardList />
 */
function MoviesCardList({ moviesData, isDeleteButton }) {
  // Количество фильмов на странице
  const [numberOfFilms, setNumberOfFilms] = useState(0);
  // Сколько еще показать фильмов
  const [moreFilms, setMoreFilms] = useState(0);

  /**
   * Функция меняет конфигурацию отображения карточек на странице,
   * в зависимости от размера экрана.
   */
  function renderGridFilms() {
    if (window.innerWidth <= mobileWidth) {
      setNumberOfFilms(5);
      setMoreFilms(2);
    } else if (window.innerWidth <= tabletWidth) {
      setNumberOfFilms(8);
      setMoreFilms(2);
    } else {
      setNumberOfFilms(12);
      setMoreFilms(3);
    }
  }

  /**
   * Функция преобразовывает минуты в строку продолжительности фильма.
   *
   * @param {Number} minutes Минуты из БД
   * @returns {String}
   */
  function getTime(minutes) {
    return `${Math.floor(minutes / 60)}ч${minutes % 60}м`;
  }

  useEffect(() => {
    renderGridFilms();

    window.addEventListener('resize', renderGridFilms);
  }, []);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list list">
        {moviesData.map((movie, index) => (
          index < numberOfFilms
          && (
            <li key={movie.id}>
              <MoviesCard
                name={movie.nameRU}
                duration={getTime(movie.duration)}
                image={`https://api.nomoreparties.co${movie.image.url}`}
                isDeleteButton={isDeleteButton}
              />
            </li>
          )
        ))}
      </ul>
      <div className="movies-card-list__more">
        {numberOfFilms < moviesData.length
          && (
            <button
              type="button"
              className="movies-card-list__more-film-button link"
              onClick={() => setNumberOfFilms(numberOfFilms + moreFilms)}
            >
              Ещё
            </button>
          )}
      </div>
    </section>
  );
}

MoviesCardList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    id: PropTypes.number,
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object,
    nameEN: PropTypes.string,
    nameRU: PropTypes.string,
    trailerLink: PropTypes.string,
    updated_at: PropTypes.string,
    year: PropTypes.string,
  })).isRequired,
  isDeleteButton: PropTypes.bool,
};

MoviesCardList.defaultProps = {
  isDeleteButton: false,
};

export default MoviesCardList;
