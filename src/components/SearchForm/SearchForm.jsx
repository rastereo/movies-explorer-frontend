/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

import './SearchForm.css';

/**
 * Компонент страницы с поиском по фильмам.
 *
 * @param {Object} props
 * @param {String} props.name Имя формы.
 * @returns {React.ReactElement} SearchForm
 */
function SearchForm({ name }) {
  return (
    <section className="search-form">
      <form
        action="#"
        name="search-form"
        className="search-form__form"
      >
        <div className="search-form__container">
          <input
            type="text"
            name={name}
            placeholder="Фильмы"
            className="search-form__input"
          />
          <button
            type="submit"
            aria-label="Подтвердить поиск фильмов"
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
};

export default SearchForm;
