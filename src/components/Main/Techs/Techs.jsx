import { Link } from 'react-router-dom';

import './Techs.css';
import NavTab from '../NavTab/NavTab';

/**
 * Компонент с использованными технологиями.
 *
 * @returns {React.ReactElement} Techs
 */
function Techs() {
  return (
    <section className="techs">
      <NavTab title="Технологии" />
      <div className="techs__container">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
        <ul className="techs__tools list">
          <li className="techs__tool">
            <Link
              to="https://html.spec.whatwg.org"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              HTML
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://www.w3.org/Style/CSS"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              CSS
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://developer.mozilla.org/ru/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              JS
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              React
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://git-scm.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Git
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://expressjs.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Express.js
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://www.mongodb.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              mongoDB
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
