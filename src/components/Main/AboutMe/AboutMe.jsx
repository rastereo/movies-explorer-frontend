import { Link } from 'react-router-dom';

import './AboutMe.css';
import NavTab from '../NavTab/NavTab';
import studentPhoto from '../../../images/student-photo.jpg';

/**
 * Компонент с информацией о студенте.
 *
 * @returns {React.ReactElement} Promo
 */
function AboutMe() {
  return (
    <section className="about-me">
      <NavTab title="Студент" />
      <article className="about-me__profile">
        <div className="about-me__container">
          <h3 className="about-me__name">
            Виталий
          </h3>
          <p className="about-me__job">
            {/* сделать функцию, которая высчитывает мой возраст */}
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__presentation">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            to="https://github.com/rastereo"
            className="about-me__link link"
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
