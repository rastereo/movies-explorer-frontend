import { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchForm.css';

import UseSearchHistory from '../../hooks/useSearchHistory';

/**
 * Компонент страницы с поиском по фильмам.
 *
 * @param {Object} props
 * @param {String} props.name Имя формы
 * @param {Function} props.onSearch Функция обработки поиска фильмов
 * @returns {React.ReactElement} <SearchForm />
 */
function SearchForm({ name, onSearch, onShort }) {
  // Название фильма из поисковой строки.
  const [movie, setMovie] = useState('');
  // Искать короткометражки.
  const [short, setShort] = useState(false);

  /**
   * Функция обработчик отправки формы.
   *
   * @param {Event} evt Событие submit.
   * @returns {void}
   */
  function handleSubmit(evt) {
    evt.preventDefault();

    onSearch(movie, short);
  }

  function handleCheckbox(evt) {
    setShort(evt.target.checked);

    onShort(movie, evt.target.checked);
  }

  return (
    <section className="search-form">
      <form
        action="#"
        name={name}
        onSubmit={(evt) => handleSubmit(evt)}
        className="search-form__form"
      >
        <div className="search-form__container">
          <input
            type="text"
            name="movie"
            value={movie}
            required
            onChange={(evt) => setMovie(evt.target.value)}
            placeholder="Фильм"
            className="search-form__input"
          />
          <button
            type="submit"
            aria-label="Подтвердить поиск фильма"
            className="search-form__submit link"
          >
          </button>
        </div>
        <label
          htmlFor="shortMovie"
          className="search-form__label"
        >
          Короткометражки
          <div className="search-form__switch">
            <input
              type="checkbox"
              name="short"
              onChange={(evt) => handleCheckbox(evt)}
              value={short}
              checked={short}
              id="shortMovie"
              className="search-form__checkbox visually-hidden"
            />
            <span className="search-form__slider"></span>
          </div>
        </label>
      </form>
      {name === 'movie'
        && (
          <UseSearchHistory
            setMovie={setMovie}
            setShort={setShort}
            onSearch={onSearch}
          />
        )}
    </section>
  );
}

SearchForm.propTypes = {
  name: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onShort: PropTypes.func.isRequired,
};

export default SearchForm;
