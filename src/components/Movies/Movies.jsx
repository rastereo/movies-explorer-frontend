import PropTypes from 'prop-types';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

/**
 * Компонент страницы с поиском по фильмам.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов.
 * @param {String} props.isMovies Имя роута /movies.
 * @returns {React.ReactElement} <Movies />
 */
function Movies({ moviesData }) {
  return (
    <main className="movies">
      <h1 className="visually-hidden">Фильмы</h1>
      <SearchForm name="movie" />
      <MoviesCardList
        moviesData={moviesData}
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
};

export default Movies;
