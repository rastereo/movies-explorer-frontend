/* eslint-disable jsx-a11y/label-has-associated-control */
import './SearchForm.css';

/**
 * Компонент страницы с поиском по фильмам.
 * @returns {React.ReactElement} <SearchForm />
 */
function SearchForm() {
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
            name="film-name"
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

export default SearchForm;
