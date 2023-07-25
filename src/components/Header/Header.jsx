import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

/**
 * Компонент, который отрисовывает шапку сайта на страницу.
 * @param {object} props
 * @returns {React.ReactElement} <Header />
 */
function Header(props) {
  const { isLoggedIn, isMain } = props;

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
  /**
   * isLoggedIn Boolean - Состояние, если пользователь авторизован(true) или
   * не авторизован(false), передается дальше в компонент Navigation.
  */
  isLoggedIn: PropTypes.bool.isRequired,
  /**
   * isMain String - возвращает строку location.pathname, представляющий
   * текущий URL. Если пользователь находится в index, шапка серого цвета,
   * во всех других роутах шапка белая.
   */
  isMain: PropTypes.string.isRequired,
};

export default Header;
