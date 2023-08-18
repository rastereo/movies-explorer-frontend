import { useEffect } from 'react';

/**
 * Хук восстанавливает поиск фильмов из localStorage.
 */
function useSearchHistory({ setMovie, setShort, onSearch }) {
  useEffect(() => {
    const savedSearchHistory = JSON.parse(localStorage.getItem('saved-search-history'));

    if (savedSearchHistory !== null) {
      setMovie(savedSearchHistory.nameMovie);
      setShort(savedSearchHistory.short);

      onSearch(savedSearchHistory.nameMovie, savedSearchHistory.short);
    }
  }, []);
}

export default useSearchHistory;
