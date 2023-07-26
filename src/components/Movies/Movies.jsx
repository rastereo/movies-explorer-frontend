import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

/**
 * Компонент страницы с поиском по фильмам.
 * @returns {React.ReactElement} <Movies />
 */
function Movies() {
  return (
    <main className="movies">
      <h1 className="visually-hidden">Фильмы</h1>
      <SearchForm />
    </main>
  );
}

export default Movies;
