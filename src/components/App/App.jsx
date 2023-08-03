/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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

  // Показывает, на каком route приложение.
  const location = useLocation();

  /**
   * Функция закрывает поп-ап подсказку.
   */
  function closeInfoTooltip() {
    setIsInfoTooltip(false);
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
          element={<Register />}
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
        onClose={() => closeInfoTooltip()}
      />
    </>
  );
}

export default App;
