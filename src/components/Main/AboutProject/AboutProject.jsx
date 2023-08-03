import './AboutProject.css';
import TitleSection from '../TitleSection/TitleSection';

/**
 * Компонент с описанием дипломного проекта.
 *
 * @returns {React.ReactElement} AboutProject
 */
function AboutProject() {
  return (
    <section className="about-project">
      <TitleSection title="О проекте" />
      <ul className="about-project__stages list">
        <li>
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__times list">
        <li className="about-project__time about-project__time_size_small">
          <p className="about-project__number-of-weeks about-project__number-of-weeks_color_blue">
            1 неделя
          </p>
          <p className="about-project__development">
            Back-end
          </p>
        </li>
        <li className="about-project__time about-project__time_size_big">
          <p className="about-project__number-of-weeks">
            4 недели
          </p>
          <p className="about-project__development ">
            Front-end
          </p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
