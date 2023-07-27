import PropTypes from 'prop-types';

import './MoviesCardList.css';
import MoviesCard from './MoviesCard/MoviesCard';

/**
 * Компонент, который управляет отрисовкой карточек
 * фильмов на страницу и их количеством.
 *
 * @param {Object} props
 * @param {Array} props.moviesData Массив фильмов.
 * @param {String} props.isMovies Имя роута /movies. Если пользователь находится
 * в /movies, отображать блок с кнопкой "Ещё"
 * @returns {React.ReactElement} <MoviesCardList />
 */
function MoviesCardList({ moviesData, isMovies }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list list">
        {moviesData.map((movie) => (
          <li key={movie.movieId}>
            <MoviesCard
              name={movie.nameRU}
              duration={movie.duration}
              image={movie.image}
            />
          </li>
        ))}
      </ul>
      {isMovies === '/movies'
        && (
          <div className="movies-card-list__more">
            <button
              type="button"
              className="movies-card-list__more-film-button link"
            >
              Ещё
            </button>
          </div>
        )}
    </section>
  );
}

MoviesCardList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    nameRU: PropTypes.string,
    duration: PropTypes.string,
    image: PropTypes.string,
    movieId: PropTypes.number,
  })).isRequired,
  isMovies: PropTypes.string,
};

MoviesCardList.defaultProps = {
  isMovies: '',
};

export default MoviesCardList;
