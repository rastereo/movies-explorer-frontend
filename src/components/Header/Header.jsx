import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

/**
 * Компонент, который отрисовывает шапку сайта на страницу
 * @param {object} props
 * @returns {React.ReactElement} <Header />
 */
function Header(props) {
  const { isLoggedIn } = props;

  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          alt="Логотип Movies Explorer"
          className="logo"
        />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

Header.propTypes = {
  /**
   * isLoggedIn Boolean - Состояние, если пользователь авторизован(true) или
   * не авторизован(false), передается дальше в компонент Navigation.
  */
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
