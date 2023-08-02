import { Link } from 'react-router-dom';

import './Footer.css';

/**
 * Презентационный компонент, который отрисовывает подвал.
 *
 * @returns {React.ReactElement} Footer
 */
function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links list">
          <li>
            <Link
              to="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/rastereo"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
