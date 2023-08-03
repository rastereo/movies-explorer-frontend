import { useNavigate } from 'react-router-dom';

import './NotFound.css';

/**
 * Компонент страницы не найдено.
 *
 * @returns {React.ReactElement} NotFound
 */
function NotFound() {
  const navigation = useNavigate();

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button
        type="button"
        onClick={() => navigation(-1)}
        className="not-found__back-button link"
      >
        Назад
      </button>
    </main>
  );
}

export default NotFound;
