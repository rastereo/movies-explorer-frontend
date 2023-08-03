/* eslint-disable no-unused-vars */
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

import mainApi from '../../utils/MainApi';

import moviesData from '../../utils/data/moviesData';

/**
 * Корневой компонент приложения.
 *
 * @returns {React.ReactElement} App
 */
function App() {
  // Текущее значение состояния авторизации пользователя на сайте.
  const [isLoggedIn, setLoggedIn] = useState(false);
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
   * Функция обработки регистрации пользователя.
   *
   * @param {String} name Имя пользователя
   * @param {String} email Почта пользователя
   * @param {String} password Пароль пользователя
   * @returns {void}
   */
  function handleRegister(name, email, password) {
    setIsLoading(true);

    mainApi.signUp(name, email, password)
      .then(() => {
        navigate('/movies', { replace: true });

        setLoggedIn(true);

        handleInfoTooltip('Вы успешно зарегистрировались!');
      })
      .catch((err) => {
        handleInfoTooltip(err.message, true);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
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
              <Profile />
            </>
          )}
        />
        <Route
          path="/signin"
          element={<Login />}
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
    </>
  );
}

export default App;
