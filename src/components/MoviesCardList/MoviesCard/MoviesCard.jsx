import { useState } from 'react';
import PropTypes from 'prop-types';

import './MoviesCard.css';

/**
 * Компонент одной карточки фильма.
 *
 * @param {object} props Фильм.
 * @param {string} props.name Название фильма ну русском.
 * @param {string} props.duration Продолжительность фильма.
 * @param {string} props.image Ссылка на обложку фильма.
 * @returns {React.ReactElement} <MoviesCardList />
 */
function MoviesCard({ name, duration, image }) {
  const [isSave, setIsSave] = useState(false);

  /**
   * Функция меняет состояние кнопки сохранения.
   *
   * @returns {void}
   */
  function handleSaveClick() {
    setIsSave(!isSave);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <div>
          <h2 className="movies-card__name">
            {name}
          </h2>
          <p className="movies-card__duration">
            {duration}
          </p>
        </div>
        <button
          type="button"
          aria-label="Сохранить фильм"
          onClick={handleSaveClick}
          className={`movie-card__button link ${isSave && 'movie-card__button_active'}`}
        >
        </button>
      </div>
      <img
        src={image}
        alt={`Обложка фильма "${name}"`}
        className="movie-card__image"
      />
    </article>
  );
}

MoviesCard.propTypes = {
  /**
   * name String - Название фильма ну русском.
   */
  name: PropTypes.string.isRequired,
  /**
   * duration String - Продолжительность фильма.
   */
  duration: PropTypes.string.isRequired,
  /**
   * image String - Ссылка на обложку фильма.
   */
  image: PropTypes.string.isRequired,
};

export default MoviesCard;
