import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

/**
 * Компонент, который отрисовывает шапку сайта на страницу.
 *
 * @param {Object} props
 * @param {Boolean} props.isLoggedIn Состояние, если пользователь авторизован(true)
 * или не авторизован(false).
 * @param {Boolean} props.isMain Возвращает boolean значение, представляющий
 * текущий роут. Если пользователь находится в index, шапка серого цвета, во всех
 * других роутах шапка белая.
 * @returns {React.ReactElement} Header
 */
function Header({ isLoggedIn, isMain }) {
  return (
    <header className={`header ${isMain && 'header_color_grey'}`}>
      <Link to="/">
        <img
          src={logo}
          alt="Логотип Movies Explorer"
          className="logo"
        />
      </Link>
      {isLoggedIn
        ? (
          <Navigation />
        )
        : (
          <nav className="navigation">
            <ul className="navigation__menu list">
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
            </ul>
          </nav>
        )}
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isMain: PropTypes.bool,
};

Header.defaultProps = {
  isMain: false,
};

export default Header;
