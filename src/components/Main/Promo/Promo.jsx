import './Promo.css';

/**
 * Компонент с вёрсткой баннера страницы «О проекте».
 *
 * @returns {React.ReactElement}
 */
function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  );
}

export default Promo;
