import { Link } from 'react-router-dom';

import './Portfolio.css';
import TitleSection from '../TitleSection/TitleSection';

/**
 * Компонент со ссылками на другие проекты.
 *
 * @returns {React.ReactElement}
 */
function Portfolio() {
  return (
    <section className="portfolio">
      <TitleSection title="Портфолио" isSmall />
      <ul className="portfolio__links list">
        <li>
          <Link
            to="https://rastereo.github.io/how-to-learn"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
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
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
