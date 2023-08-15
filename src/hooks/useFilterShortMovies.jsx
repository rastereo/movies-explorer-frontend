import { useEffect } from 'react';

/**
 * Хук отфильтровывает фильмы больше 40 минут.
 */
function useFilterShortMovies({
  moviesData,
  movies,
  setMovies,
  setSearchHint,
}) {
  useEffect(() => {
    const shortMoviesCheckbox = document.querySelector('.search-form__checkbox');

    function filterShortMovie() {
      if (shortMoviesCheckbox.checked && movies !== null) {
        const filteredMovies = movies.filter((movie) => movie.duration <= 40);
        if (filteredMovies.length === 0) {
          setMovies(null);
          setSearchHint('Ничего не найдено');
        } else {
          setMovies(filteredMovies);
        }
      } else {
        setMovies(moviesData);
      }
    }

    shortMoviesCheckbox.addEventListener('change', filterShortMovie);

    return () => {
      shortMoviesCheckbox.removeEventListener('change', filterShortMovie);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);
}

export default useFilterShortMovies;