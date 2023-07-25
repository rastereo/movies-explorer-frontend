import './Footer.css';

/**
 * Презентационный компонент, который отрисовывает подвал.
 * @returns {React.ReactElement} <Footer />
 */
function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links list">
          <li>
            <a
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rastereo"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
