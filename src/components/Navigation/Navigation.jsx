import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navigation.css';

/**
 * Компонент, который отвечает за меню навигации на сайте.
 *
 * @param {Object} props
 * @param {Boolean} props.isLoggedIn Состояние, если пользователь авторизован(true) или
 * не авторизован(false). От этого пропса зависит, какие элементы навигации отображать.
 * @returns {React.ReactElement} Navigation
 */
function Navigation({ isLoggedIn }) {
  /**
   * Функция для настройки класса link_active, применяемого в зависимости
   * от активного и ожидающего состояния ссылки.
   * @param {boolean} isActive Состояние ссылке.
   * @returns {string} Имя класса.
   */
  function checkLinkState(isActive) {
    return isActive ? 'link link_active' : 'link';
  }

  return (
    <nav className={`navigation ${isLoggedIn && 'navigation_state_logged'}`}>
      <ul className={`navigation__menu list ${isLoggedIn && 'navigation__menu_state_logged'}`}>
        {isLoggedIn
          ? (
            <>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) => checkLinkState(isActive)}
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) => checkLinkState(isActive)}
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
              <li className="navigation__item navigation__item_position_right">
                <NavLink
                  to="/profile"
                  className={({ isActive }) => checkLinkState(isActive)}
                >
                  <div className="navigation__account">
                    <span>Аккаунт</span>
                    <div className="navigation__figure"></div>
                  </div>
                </NavLink>
              </li>
            </>
          )
          : (
            <>
              <li>
                <Link
                  to="/signup"
                  className="link"
                >
                  Регистрация
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="navigation__login link"
                >
                  Войти
                </Link>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
