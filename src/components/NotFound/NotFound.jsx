import { useNavigate } from 'react-router-dom';

import './NotFound.css';

/**
 * Компонент страницы "Not Found".
 *
 * @returns {React.ReactElement}
 */
function NotFound() {
  // Хук возвращает функцию, которую можно использовать для программной навигации.
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button
        type="button"
        onClick={() => navigate(-1, { replace: true })}
        className="not-found__back-button link"
      >
        Назад
      </button>
    </main>
  );
}

export default NotFound;
