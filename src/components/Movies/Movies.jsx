import { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

/**
 * Компонент страницы с поиском по фильмам.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов
 * @param {Function} props.onSearch Функция обработки поиска фильмов
 * @param {Boolean} props.isLoading Отображать прелоудер
 * @param {String} props.searchHint Подсказка при поиске
 * @param {Function} props.setSearchHint Вставить текст в подсказку
 * @returns {React.ReactElement} <Movies />
 */
function Movies({
  moviesData,
  isLoading,
  searchHint,
  setSearchHint,
  onSearch,
  onActionMovie,
  savedMovies,
  onShort,
}) {
  useEffect(() => {
    if (moviesData === null) {
      setSearchHint('Чтобы найти фильм, введите ключевое слово в поисковую строку');
    }
  }, [moviesData]);

  return (
    <main className="movies">
      <h1 className="visually-hidden">Фильмы</h1>
      <SearchForm
        name="movie"
        onSearch={onSearch}
        onShort={onShort}
        isDisabled={isLoading}
      />
      <MoviesCardList
        moviesData={moviesData}
        savedMovies={savedMovies}
        isLoading={isLoading}
        searchHint={searchHint}
        setSearchHint={setSearchHint}
        onActionMovie={onActionMovie}
      />
    </main>
  );
}

Movies.propTypes = {
  searchHint: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setSearchHint: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onActionMovie: PropTypes.func.isRequired,
  onShort: PropTypes.func.isRequired,
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object,
    movieId: PropTypes.number,
  })),
  // eslint-disable-next-line react/forbid-prop-types
  savedMovies: PropTypes.array,
};

Movies.defaultProps = {
  moviesData: null,
  savedMovies: null,
};

export default Movies;
