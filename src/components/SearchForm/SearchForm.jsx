/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchForm.css';

/**
 * Компонент страницы с поиском по фильмам.
 *
 * @param {String} props.name Имя формы
 * @param {Function} props.onSearch Функция обработки поиска фильмов
 * @returns {React.ReactElement} <SearchForm />
 */
function SearchForm({ name, onSearch }) {
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

    setMovie('');
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
        <label className="search-form__label">
          Короткометражки
          <div className="search-form__switch">
            <input
              type="checkbox"
              name="short"
              value={short}
              onChange={(evt) => setShort(evt.target.checked)}
              className="search-form__checkbox visually-hidden"
            />
            <span className="search-form__slider"></span>
          </div>
        </label>
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  name: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
