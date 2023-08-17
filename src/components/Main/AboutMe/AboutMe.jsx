import { Link } from 'react-router-dom';

import './AboutMe.css';
import TitleSection from '../TitleSection/TitleSection';
import studentPhoto from '../../../images/student-photo.jpg';

/**
 * Компонент с информацией о студенте.
 *
 * @returns {React.ReactElement}
 */
function AboutMe() {
  return (
    <section className="about-me">
      <TitleSection title="Студент" />
      <article className="about-me__profile">
        <div className="about-me__container">
          <h3 className="about-me__name">
            Ростислав
          </h3>
          <p className="about-me__job">
            Фронтенд-разработчик, 31 лет
          </p>
          <p className="about-me__presentation">
            Я родился и живу в Москве, закончил факультет звукорежиссуры ГИТР.
            Занимаюсь музыкой, люблю активный отдых и книги. С 2015 года работал
            в сфере развлечений &#40;концерты, спектакли, кино и т.д.&#41;. Недавно
            прошёл курс веб-разработки от &#171;Яндекс.Практикума&#187;. Постоянно
            развиваюсь и хочу, чтобы веб-разработка стала моей профессией.
          </p>
          <Link
            to="https://github.com/rastereo"
            className="about-me__github link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
        <img
          src={studentPhoto}
          alt="Фото студента"
          className="about-me__photo"
        />
      </article>
    </section>
  );
}

export default AboutMe;
