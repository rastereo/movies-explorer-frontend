import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';

/**
 * Компонент страницы «О проекте». Он будет содержать только презентационные
 * компоненты и в будущем, за исключением шапки навигации.
 * @returns {React.ReactElement} <Main />
 */
function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
    </main>
  );
}

export default Main;
