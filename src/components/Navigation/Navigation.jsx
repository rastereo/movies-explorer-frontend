import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

/**
 * Компонент, который отвечает за меню навигации на сайте.
 *
 * @returns {React.ReactElement} Navigation
 */
function Navigation() {
  // Состояние, если экран по ширине меньше 768px.
  const [isSizeSmall, setIsSizeSmall] = useState(false);
  // Элемент навигация
  const menu = useRef();

  /**
   * Функция открывает/закрывает боковое меню навигации.
   *
   * @returns {void}
   */
  function handleToggleNavigation() {
    if (isSizeSmall) {
      menu.current.classList.toggle('navigation_hide');
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
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setIsSizeSmall(true);
      } else {
        setIsSizeSmall(false);
      }
    });

    if (window.innerWidth <= 768) setIsSizeSmall(true);
  }, []);

  return (
    <>
      {isSizeSmall
        && (
          <button
            type="button"
            onClick={handleToggleNavigation}
            className="navigation__hamburger link"
          >
          </button>
        )}
      <nav
        ref={menu}
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
        <ul className="navigation__menu list navigation__menu_state_logged">
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
