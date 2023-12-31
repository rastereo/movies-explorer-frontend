import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

import { tabletWidth } from '../../utils/screenWidthConstants';

/**
 * Компонент, который отвечает за меню навигации на сайте.
 *
 * @returns {React.ReactElement}
 */
function Navigation() {
  // Состояние, если экран по ширине меньше 768px.
  const [isSizeSmall, setIsSizeSmall] = useState(false);

  // Элемент навигации.
  const navigation = useRef();
  // Элемент меню навигации
  const menu = useRef();

  /**
   * Функция открывает/закрывает боковое меню навигации.
   *
   * @returns {void}
   */
  function handleToggleNavigation() {
    if (isSizeSmall) {
      navigation.current.classList.toggle('navigation_hide');
      menu.current.classList.toggle('navigation__menu_hide');
    }
  }

  /**
   * Функция для настройки класса link_active, применяемого в зависимости
   * от активного и ожидающего состояния ссылки.
   *
   * @param {boolean} isActive Состояние ссылке.
   * @returns {string} Имя класса.
   */
  function checkLinkState(isActive) {
    return isActive ? 'link link_active' : 'link';
  }

  useEffect(() => {
    /**
     * Функция меняет стейт isSizeSmall.
     */
    function changeIsSize() {
      if (window.innerWidth <= tabletWidth) {
        setIsSizeSmall(true);
      } else {
        setIsSizeSmall(false);
      }
    }

    changeIsSize();

    window.addEventListener('resize', changeIsSize);

    return () => window.removeEventListener('resize', changeIsSize);
  }, []);

  return (
    <>
      {isSizeSmall
        && (
          <button
            type="button"
            onClick={handleToggleNavigation}
            className="hamburger link"
          >
          </button>
        )}
      <nav
        ref={navigation}
        className={`navigation navigation_state_logged ${isSizeSmall && 'navigation_hide'}`}
      >
        {isSizeSmall
          && (
            <button
              type="button"
              onClick={handleToggleNavigation}
              className="navigation__close link"
            >
            </button>
          )}
        <ul
          ref={menu}
          className={`navigation__menu list navigation__menu_state_logged ${isSizeSmall && 'navigation__menu_position_right'} ${isSizeSmall && 'navigation__menu_hide'}`}
        >
          {isSizeSmall
            && (
              <>
                <li className="navigation__item navigation__item_position_right">
                </li>
                <li className="navigation__item">
                  <NavLink
                    to="/"
                    onClick={() => handleToggleNavigation()}
                    className={({ isActive }) => checkLinkState(isActive)}
                  >
                    Главная
                  </NavLink>
                </li>
              </>
            )}
          <li className="navigation__item">
            <NavLink
              to="/movies"
              onClick={() => handleToggleNavigation()}
              className={({ isActive }) => checkLinkState(isActive)}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/saved-movies"
              onClick={() => handleToggleNavigation()}
              className={({ isActive }) => checkLinkState(isActive)}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation__item navigation__item_margin-left_auto">
            <NavLink
              to="/profile"
              onClick={() => handleToggleNavigation()}
              className={({ isActive }) => checkLinkState(isActive)}
            >
              <div className="navigation__account">
                <span>Аккаунт</span>
                <div className="navigation__figure"></div>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
