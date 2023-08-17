import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import { regexEnglishLanguage } from '../../utils/regexConstants';

/**
 * Компонент страницы с сохранёнными карточками фильмов.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов
 * @param {String} props.searchHint Подсказка при поиске
 * @param {Function} props.onDelete Функция действие над фильмом
 * @returns {React.ReactElement}
 */
function SavedMovies({
  moviesData,
  searchHint,
  setSearchHint,
  onActionMovie,
}) {
  // Список отфильтрованных поиском фильмов
  const [filterMovies, setFilterMovies] = useState(null);
  // Заблокировать форму, когда нет сохраненных фильмов
  const [isDisabledForm, setIsDisabledForm] = useState(false);

  /**
   * Функция поиска по сохраненным фильмам.
   *
   * @param {String} nameSavedMovie Название фильма
   * @param {Boolean} short Искать короткометражку
   */
  function searchSavedMovies(nameSavedMovie, short) {
    const lowerCaseName = nameSavedMovie.toLowerCase();

    setFilterMovies(null);

    let languageName = 'nameRU';

    if (regexEnglishLanguage.test(lowerCaseName)) {
      languageName = 'nameEN';
    }

    let result = moviesData.filter((movie) => (
      movie[languageName].toLowerCase().includes(lowerCaseName)
    ));

    if (short) {
      result = result.filter((item) => item.duration < 40);
    }

    if (result.length !== 0) {
      setFilterMovies(result);
    } else {
      setSearchHint('Ничего не найдено');
    }
  }

  useEffect(() => {
    setFilterMovies(moviesData);

    if (moviesData === null) {
      setIsDisabledForm(true);
      setSearchHint('Нет сохраненных фильмов');
    }
  }, [moviesData]);

  return (
    <main className="movies movies_padding_bottom">
      <h1 className="visually-hidden">Сохранённые фильмы</h1>
      <SearchForm
        name="save-movie"
        onSearch={searchSavedMovies}
        onShort={searchSavedMovies}
        isDisabled={isDisabledForm}
      />
      <MoviesCardList
        moviesData={filterMovies}
        searchHint={searchHint}
        setSearchHint={setSearchHint}
        onActionMovie={onActionMovie}
        isSavedMovies
      />
    </main>
  );
}

SavedMovies.propTypes = {
  searchHint: PropTypes.string.isRequired,
  setSearchHint: PropTypes.func.isRequired,
  onActionMovie: PropTypes.func.isRequired,
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    image: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    movieId: PropTypes.number,
  })),
};

SavedMovies.defaultProps = {
  moviesData: null,
};

export default SavedMovies;
