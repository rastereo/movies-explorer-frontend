import Promo from './Promo/Promo';

/**
 * Компонент страницы «О проекте». Он будет содержать только презентационные
 * компоненты и в будущем, за исключением шапки навигации.
 * @returns {React.ReactElement} <Main />
 */
function Main() {
  return (
    <main>
      <Promo />
    </main>
  );
}

export default Main;
