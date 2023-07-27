import PropTypes from 'prop-types';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

/**
 * Компонент страницы с поиском по фильмам.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов.
 * @param {string} props.isMovies Имя роута /movies.
 * @returns {React.ReactElement} <Movies />
 */
function Movies({ moviesData, isMovies }) {
  return (
    <main className="movies">
      <h1 className="visually-hidden">Фильмы</h1>
      <SearchForm name="movies" />
      <MoviesCardList
        moviesData={moviesData}
        isMovies={isMovies}
      />
    </main>
  );
}

Movies.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    nameRU: PropTypes.string,
    duration: PropTypes.string,
    image: PropTypes.string,
    movieId: PropTypes.number,
  })).isRequired,
  isMovies: PropTypes.string,
};

Movies.defaultProps = {
  isMovies: '',
};

export default Movies;
