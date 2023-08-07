import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';
import moviesData from '../../utils/data/moviesData';

/**
 * Корневой компонент приложения.
 *
 * @returns {React.ReactElement} App
 */
function App() {
  // Текущее значение состояния авторизации пользователя на сайте.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Текущее значение состояния информации о зарегистрированном пользователе.
  const [currentUser, setCurrentUser] = useState(null);
  // Текущее значение состояния видимости подсказки с информацией.
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  // Текущее значение состояния ошибки при отправки формы.
  const [isSubmitError, setIsSubmitError] = useState(false);
  // Текущее значение состояния сообщения в подсказке.
  const [tooltip, setTooltip] = useState('');
  // Текущее значение состояния отображения прелоудера.
  const [isLoading, setIsLoading] = useState(false);

  // Хук показывает, на каком route приложение.
  const location = useLocation();
  // Хук возвращает функцию, которую можно использовать для программной навигации.
  const navigate = useNavigate();

  /**
   * Функция обработки поп-ап подсказки.
   *
   * @param {String} message Сообщение подсказки
   * @param {Boolean} isError Это сообщение говорит об ошибке
   */
  function handleInfoTooltip(message, isError) {
    setIsInfoTooltip(true);
    setTooltip(message);
    setIsSubmitError(isError);
  }

  /**
   * Функция закрывает поп-ап подсказку.
   */
  function closeInfoTooltip() {
    setIsInfoTooltip(false);
  }

  /**
   * Функция открывает доступ в аккаунт на сайте.
   *
   * @param {Object} data Объект из БД с информацией
   * о пользователе
   * @returns {void}
   */
  function signInAccount(data) {
    setIsLoggedIn(true);

    setCurrentUser(data);

    navigate('/movies', { replace: true });
  }

  /**
   * Функция выход из аккаунта.
   *
   */
  function signOutAccount() {
    mainApi.signOut()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser(null);

        navigate('/', { replace: true });
      })
      .catch((err) => console.log(err));
  }

  /**
   * Функция обработки регистрации пользователя.
   *
   * @param {String} name Имя пользователя
   * @param {String} email Почта пользователя
   * @param {String} password Пароль пользователя
   */
  function handleRegister(name, email, password) {
    setIsLoading(true);

    mainApi.signUp(name, email, password)
      .then((user) => {
        signInAccount(user.data);

        handleInfoTooltip('Вы успешно зарегистрировались!');
      })
      .catch((err) => {
        handleInfoTooltip(err.message, true);
      })
      .finally(() => setIsLoading(false));
  }

  /**
   * Функция обработки авторизации пользователя.
   *
   * @param {String} email Почта
   * @param {String} password Пароль
   */
  function handleLogin(email, password) {
    setIsLoading(true);

    mainApi.signIn(email, password)
      .then((user) => {
        signInAccount(user.data);
      })
      .catch((err) => {
        handleInfoTooltip(err.message, true);
      })
      .finally(() => setIsLoading(false));
  }

  /**
   * Функция проверяет валидность JWT токена.
   *
   * @returns {void}
   */
  function checkToken() {
    mainApi.validateToken()
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user.data);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateProfile(name, email) {
    mainApi.patchProfile(name, email)
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        handleInfoTooltip(err.message, true);
      });
  }

  useEffect(() => {
    if (isLoggedIn) {
      // Promise.all([
      //   api.getUserInfo(),
      //   api.getInitialCards()
      // ])
      //   .then(([userInfo, cards]) => {
      //     setCurrentUser(userInfo.data);
      //     setCards(cards.data.reverse());
      //   })
      //   .catch(err => console.log(err));
    } else {
      checkToken();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          index
          element={(
            <>
              <Header
                isLoggedIn={isLoggedIn}
                isMain={location.pathname === '/'}
              />
              <Main />
              <Footer />
            </>
          )}
        />
        <Route
          path="/movies"
          element={(
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Movies
                moviesData={moviesData}
                isMovies={location.pathname}
              />
              <Footer />
            </>
          )}
        />
        <Route
          path="/saved-movies"
          element={(
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies moviesData={moviesData.slice(0, 3)} />
              <Footer />
            </>
          )}
        />
        <Route
          path="/profile"
          element={(
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Profile
                onUpdate={handleUpdateProfile}
                onLogout={signOutAccount}
              />
            </>
          )}
        />
        <Route
          path="/signin"
          element={(
            <Login
              onLogin={handleLogin}
              isLoading={isLoading}
            />
          )}
        />
        <Route
          path="/signup"
          element={(
            <Register
              onRegister={handleRegister}
              isLoading={isLoading}
            />
          )}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <InfoTooltip
        isOpen={isInfoTooltip}
        isError={isSubmitError}
        tooltip={tooltip}
        onClose={closeInfoTooltip}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
