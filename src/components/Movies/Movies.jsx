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
 * @param {Boolean} props.onShort Функция отфильтровывает фильмы длиннее 40 минут.
 * @returns {React.ReactElement} <Movies />
 */
function Movies({
  moviesData,
  isLoading,
  searchHint,
  setSearchHint,
  onSearch,
}) {
  return (
    <main className="movies">
      <h1 className="visually-hidden">Фильмы</h1>
      <SearchForm
        name="movie"
        onSearch={onSearch}
      />
      <MoviesCardList
        moviesData={moviesData}
        isLoading={isLoading}
        searchHint={searchHint}
        setSearchHint={setSearchHint}
      />
    </main>
  );
}

Movies.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchHint: PropTypes.string.isRequired,
  setSearchHint: PropTypes.func.isRequired,
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object,
    movieId: PropTypes.number,
  })),
};

Movies.defaultProps = {
  moviesData: null,
};

export default Movies;
