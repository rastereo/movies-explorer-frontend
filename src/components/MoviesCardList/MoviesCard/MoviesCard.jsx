import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MoviesCard.css';

/**
 * Компонент одной карточки фильма.
 *
 * @param {Object} props
 * @param {String} props.name Название фильма ну русском
 * @param {String} props.duration Продолжительность фильма
 * @param {String} props.image Ссылка на обложку фильма
 * @param {String} props.trailerLink Ссылка на трейлер фильма
 * @param {Boolean} props.isDeleteButton Состояние, меняет кнопку
 * "Сохранить фильм" на "Удалить фильм".
 * @returns {React.ReactElement} MoviesCardList
 */
function MoviesCard({
  name,
  duration,
  image,
  trailerLink,
  isDeleteButton,
}) {
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
      <Link
        to={trailerLink}
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <div className="movies-card__container">
          <div className="movies-card__info">
            <h3 className="movies-card__name">
              {name}
            </h3>
            <p className="movies-card__duration">
              {duration}
            </p>
          </div>
        </div>
        <img
          src={image}
          alt={`Кадр из фильма «${name}»`}
          className="movies-card__image"
        />
      </Link>
      {isDeleteButton
        ? (
          <button
            type="button"
            aria-label="Удалить фильм"
            className="movies-card__button movies-card__button_icon_delete link"
          >
          </button>
        )
        : (
          <button
            type="button"
            aria-label="Сохранить фильм"
            onClick={handleSaveClick}
            className={`movies-card__button link ${isSave && 'movies-card__button_active'}`}
          >
          </button>
        )}
    </article>
  );
}

MoviesCard.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  trailerLink: PropTypes.string.isRequired,
  isDeleteButton: PropTypes.bool,
};

MoviesCard.defaultProps = {
  isDeleteButton: false,
};

export default MoviesCard;
