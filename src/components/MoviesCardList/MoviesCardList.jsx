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
 * @param {Array} props.moviesData Массив фильмов.
 * @param {Boolean} props.isDeleteButton Состояние, меняет кнопку "Сохранить фильм"
 * на "Удалить фильм", передается дальше в MoviesCard
 * @param {Boolean} props.isLoading Отображать прелоудер
 * @returns {React.ReactElement} <MoviesCardList />
 */
function MoviesCardList({
  moviesData,
  isDeleteButton,
  isLoading,
  searchHint,
  onActionMovie,
  savedMovies,
}) {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState(null);
  // Количество фильмов на странице
  const [numberOfFilms, setNumberOfFilms] = useState(0);
  // Сколько еще показать фильмов
  const [moreFilms, setMoreFilms] = useState(0);

  /**
   * Функция меняет конфигурацию отображения карточек на странице,
   * в зависимости от размера экрана.
   *
   * @returns {void}
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

  useEffect(() => {
    setMovies(moviesData);

    renderGridFilms();
  }, [moviesData]);

  useEffect(() => {
    window.addEventListener('resize', renderGridFilms);

    return () => window.removeEventListener('resize', renderGridFilms);
  }, []);

  return (
    <section className="movies-card-list">
      {movies === null && !isLoading
        && (
          <h2 className="movies-card-list__search-hint">
            {searchHint === ''
              ? 'Чтобы найти фильм, введите ключевое слово в поисковую строку'
              : `${searchHint}`}
          </h2>
        )}
      {movies !== null
        && (
          <>
            <ul className="movies-card-list__list list">
              {movies.map((movie, index) => (
                index < numberOfFilms
                && (
                  <li key={movie.id}>
                    <MoviesCard
                      isDeleteButton={isDeleteButton}
                      movie={movie}
                      onActionMovie={onActionMovie}
                      savedMovies={savedMovies}
                    />
                  </li>
                )
              ))}
            </ul>
            <div className="movies-card-list__more">
              {numberOfFilms < movies.length
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
          </>
        )}
      {isLoading && <Preloader />}
    </section>
  );
}

MoviesCardList.propTypes = {
  searchHint: PropTypes.string.isRequired,
  // setSearchHint: PropTypes.func.isRequired,
  onActionMovie: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  savedMovies: PropTypes.array.isRequired,
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
  })),
  isDeleteButton: PropTypes.bool,
  isLoading: PropTypes.bool,
};

MoviesCardList.defaultProps = {
  moviesData: null,
  isDeleteButton: false,
  isLoading: false,
};

export default MoviesCardList;
