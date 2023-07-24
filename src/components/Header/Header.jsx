import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  const { isLoggedIn } = props;

  function checkLinkState({ isActive }) {
    return isActive ? 'link link_active' : 'link';
  }

  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          alt="Логотип Movies Explorer"
          className="logo"
        />
      </Link>
      {isLoggedIn
        ? (
          <nav className="header__navigation header__navigation_state_logged">
            <ul className="header__menu header__menu_state_logged list">
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) => checkLinkState({ isActive })}
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) => checkLinkState({ isActive })}
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
              <li className="header__item header__item_position_right">
                <NavLink
                  to="/profile"
                  className={({ isActive }) => checkLinkState({ isActive })}
                >
                  <div className="header__account">
                    <span>Аккаунт</span>
                    <div className="header__figure"></div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        )
        : (
          <nav className="header__navigation">
            <ul className="header__menu list">
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
                  className="header__login link"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        )}
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
