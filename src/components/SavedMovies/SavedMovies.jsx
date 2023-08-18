import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import { regexEnglishLanguage } from '../../utils/regexConstants';
import {
  lengthShortFilms,
  messageNoSavedMovies,
  messageNothingFound,
} from '../../utils/constants';

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
  onError,
  onActionMovie,
}) {
  // Список сохраненных фильмов
  const [movies, setMovies] = useState(null);
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

    let result = null;

    let languageName = 'nameRU';

    if (regexEnglishLanguage.test(lowerCaseName)) {
      languageName = 'nameEN';
    }

    result = movies.filter((movie) => (
      movie[languageName].toLowerCase().includes(lowerCaseName)
    ));

    if (short) {
      result = result.filter((item) => item.duration < lengthShortFilms);
    }

    if (result.length !== 0) {
      setFilterMovies(result);
    } else {
      setFilterMovies(null);
      setSearchHint(messageNothingFound);
    }
  }

  /**
   * Функция удаляет карточку из результата поиска сохраненных фильмов.
   *
   * @param {Number} id Id фильма, который нужно удалить
   */
  function deleteMovie(id) {
    setFilterMovies((movieList) => {
      const filterMovieList = movieList.filter((
        (savedMovie) => savedMovie.movieId !== id
      ));

      if (filterMovieList.length === 0) {
        setSearchHint(messageNothingFound);

        return null;
      }

      return filterMovieList;
    });
  }

  useEffect(() => {
    if (movies === null && moviesData !== null) {
      setMovies(moviesData);
      setFilterMovies(moviesData);
    } else if (moviesData === null) {
      setMovies(null);
      setIsDisabledForm(true);
      setSearchHint(messageNoSavedMovies);
    } else {
      setMovies(moviesData);
      setIsDisabledForm(false);
    }
  }, [moviesData, movies, filterMovies]);

  return (
    <main className="movies movies_padding_bottom">
      <h1 className="visually-hidden">Сохранённые фильмы</h1>
      <SearchForm
        name="save-movie"
        onSearch={searchSavedMovies}
        onShort={searchSavedMovies}
        onError={onError}
        isDisabled={isDisabledForm}
      />
      <MoviesCardList
        moviesData={filterMovies}
        searchHint={searchHint}
        setSearchHint={setSearchHint}
        onActionMovie={onActionMovie}
        onDelete={deleteMovie}
        isSavedMovies
      />
    </main>
  );
}

SavedMovies.propTypes = {
  searchHint: PropTypes.string.isRequired,
  setSearchHint: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
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
