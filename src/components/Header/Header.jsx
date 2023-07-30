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
 * или не авторизован(false), передается дальше в компонент Navigation.
 * @param {String} props.isMain Возвращает строку location.pathname, представляющий
 * текущий роут. Если пользователь находится в index, шапка серого цвета, во всех
 * других роутах шапка белая.
 * @returns {React.ReactElement} Header
 */
function Header({ isLoggedIn, isMain }) {
  return (
    <header className={`header ${isMain === '/' && 'header_color_grey'}`}>
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
  isLoggedIn: PropTypes.bool.isRequired,
  isMain: PropTypes.string,
};

Header.defaultProps = {
  isMain: '',
};

export default Header;
