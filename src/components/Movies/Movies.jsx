import { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Movies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import { messageSearchFilm } from '../../utils/constants';

/**
 * Компонент страницы с поиском по фильмам.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов
 * @param {Array} props.savedMovies Массив сохраненных фильмов
 * @param {String} props.searchHint Подсказка при поиске
 * @param {Function} props.setSearchHint Вставить текст в подсказку
 * @param {Function} props.onSearch Обработка поиска фильмов
 * @param {Function} props.onShort Обработка поиска короткометражек
 * @param {Function} props.onError Обработка ошибки валидации формы
 * @param {Function} props.onActionMovie Сохранить/удалить фильм
 * @param {Boolean} props.isLoading Отображать прелоудер
 * @returns {React.ReactElement}
 */
function Movies({
  moviesData,
  savedMovies,
  searchHint,
  setSearchHint,
  onSearch,
  onShort,
  onError,
  onActionMovie,
  isLoading,
}) {
  useEffect(() => {
    if (moviesData === null) {
      setSearchHint(messageSearchFilm);
    }
  }, []);

  return (
    <main className="movies">
      <h1 className="visually-hidden">Фильмы</h1>
      <SearchForm
        name="movie"
        onSearch={onSearch}
        onShort={onShort}
        onError={onError}
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
  onError: PropTypes.func.isRequired,
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    image: PropTypes.object,
    movieId: PropTypes.number,
  })),
  savedMovies: PropTypes.arrayOf(PropTypes.object),
};

Movies.defaultProps = {
  moviesData: null,
  savedMovies: null,
};

export default Movies;
