import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navigation.css';

/**
 * Компонент, который отвечает за меню навигации на сайте.
 * @param {object} props
 * @returns {React.ReactElement} <Navigation />
 */
function Navigation(props) {
  const { isLoggedIn } = props;

  /**
   * Функция для настройки классa link_active, применяемого в зависимости
   * от активного и ожидающего состояния ссылки.
   * @param {boolean} isActive
   * @returns {string}
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
  /**
   * isLoggedIn Boolean - Состояние, если пользователь авторизован(true)
   * или не авторизован(false). От этого пропса зависит, какие элементы
   * навигации отображать.
  */
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
