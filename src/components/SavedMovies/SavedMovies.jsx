import PropTypes from 'prop-types';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

/**
 * Компонент страницы с сохранёнными карточками фильмов.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов.
 * @returns {React.ReactElement} SavedMovies
 */
function SavedMovies({ moviesData }) {
  return (
    <main className="movies">
      <h1 className="visually-hidden">Сохранённые фильмы</h1>
      <SearchForm name="saved-movies" />
      <MoviesCardList
        moviesData={moviesData}
        isDeleteButton
      />
    </main>
  );
}

SavedMovies.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    nameRU: PropTypes.string,
    duration: PropTypes.string,
    image: PropTypes.string,
    movieId: PropTypes.number,
  })).isRequired,
};

export default SavedMovies;
