import { Link } from 'react-router-dom';

import './Portfolio.css';
import NavTab from '../NavTab/NavTab';

/**
 * Компонент со ссылками на другие проекты.
 *
 * @returns {React.ReactElement} Portfolio
 */
function Portfolio() {
  return (
    <section className="portfolio">
      <NavTab title="Портфолио" isSmall />
      <ul className="portfolio__links list">
        <li>
          <Link
            to="https://github.com/rastereo/how-to-learn"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <span>↗</span>
          </Link>
        </li>
        <li>
          <Link
            to="https://rastereo.github.io/russian-travel"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <span>↗</span>
          </Link>
        </li>
        <li>
          <Link
            to="https://rastereo.nomoreparties.sbs"
            className="portfolio__link portfolio__link_border_none link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <span>↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
