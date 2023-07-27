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
          <li>
            <Link
              to="https://html.spec.whatwg.org"
              className="techs__tool link"
              target="_blank"
              rel="noreferrer"
            >
              HTML
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://www.w3.org/Style/CSS"
              className="techs__tool link"
              target="_blank"
              rel="noreferrer"
            >
              CSS
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://developer.mozilla.org/ru/docs/Web/JavaScript"
              className="techs__tool link"
              target="_blank"
              rel="noreferrer"
            >
              JS
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://react.dev"
              className="techs__tool link"
              target="_blank"
              rel="noreferrer"
            >
              React
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://git-scm.com"
              className="techs__tool link"
              target="_blank"
              rel="noreferrer"
            >
              Git
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://expressjs.com"
              className="techs__tool link"
              target="_blank"
              rel="noreferrer"
            >
              Express.js
            </Link>
          </li>
          <li className="techs__tool">
            <Link
              to="https://www.mongodb.com"
              className="techs__tool link"
              target="_blank"
              rel="noreferrer"
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
