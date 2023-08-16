import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './MoviesCardList.css';

import MoviesCard from './MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import { tabletWidth, mobileWidth } from '../../utils/screenWidthConstants';

/**
 * Компонент, который управляет отрисовкой карточек
 * фильмов на страницу и их количеством.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов
 * @param {Array} props.savedMovies Массив сохраненных фильмов пользователем
 * @param {String} props.searchHint Текст для подсказки
 * @param {Function} props.onActionMovie Сохранить/удалить фильм
 * @param {Boolean} props.isSavedMovies Состояние меняет компонент
 * с поиска фильмов на сохраненные фильмы
 * @param {Boolean} props.isLoading Отображать прелоудер
 * @returns {React.ReactElement}
 */
function MoviesCardList({
  moviesData,
  savedMovies,
  searchHint,
  onActionMovie,
  isSavedMovies,
  isLoading,
}) {
  // Список фильмов для отрисовки в на странице
  const [movies, setMovies] = useState(null);
  // Количество фильмов на странице
  const [numberOfFilms, setNumberOfFilms] = useState(0);
  // Сколько еще показать фильмов
  const [moreFilms, setMoreFilms] = useState(0);

  /**
   * Функция меняет конфигурацию отображения карточек на странице,
   * в зависимости от размера экрана.
   */
  function renderGridFilms() {
    if (!isSavedMovies) {
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
    } else if (moviesData !== null) {
      setNumberOfFilms(moviesData.length);
    } else {
      setNumberOfFilms(0);
    }
  }

  useEffect(() => {
    setMovies(moviesData);

    renderGridFilms();
  }, [moviesData]);

  useEffect(() => {
    if (!isSavedMovies) window.addEventListener('resize', renderGridFilms);

    return () => window.removeEventListener('resize', renderGridFilms);
  }, []);

  return (
    <section className="movies-card-list">
      {movies === null && !isLoading
        && (
          <h2 className="movies-card-list__search-hint">
            {searchHint}
          </h2>
        )}
      {movies !== null
        && (
          <>
            <ul className="movies-card-list__list list">
              {movies.map((movie, index) => (
                index < numberOfFilms
                && (
                  <li key={movie.id || movie.movieId}>
                    <MoviesCard
                      isSavedMovies={isSavedMovies}
                      movie={movie}
                      onActionMovie={onActionMovie}
                      savedMovies={savedMovies}
                    />
                  </li>
                )
              ))}
            </ul>
            {!isSavedMovies
              && (
                <div className="movies-card-list__more">
                  {numberOfFilms < movies.length && !isSavedMovies
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
              )}
          </>
        )}
      {isLoading && <Preloader />}
    </section>
  );
}

MoviesCardList.propTypes = {
  searchHint: PropTypes.string.isRequired,
  onActionMovie: PropTypes.func.isRequired,
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    id: PropTypes.number,
    image: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    nameEN: PropTypes.string,
    nameRU: PropTypes.string,
    trailerLink: PropTypes.string,
    updated_at: PropTypes.string,
    year: PropTypes.string,
  })),
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  isSavedMovies: PropTypes.bool,
  isLoading: PropTypes.bool,
};

MoviesCardList.defaultProps = {
  moviesData: null,
  savedMovies: null,
  isSavedMovies: false,
  isLoading: false,
};

export default MoviesCardList;
