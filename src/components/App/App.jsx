import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import moviesData from '../../utils/data/moviesData';

/**
 * Корневой компонент приложения.
 *
 * @returns {React.ReactElement} App
 */
function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setLoggedIn] = useState(true);

  const location = useLocation();

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        isMain={location.pathname}
      />
      <Routes>
        <Route
          index
          element={<Main />}
        />
        <Route
          path="/movies"
          element={(
            <Movies
              moviesData={moviesData}
              isMovies={location.pathname}
            />
          )}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies moviesData={moviesData.slice(0, 3)} />}
        />
        <Route
          path="/profile"
          element={
            <h1>Аккаунт</h1>
          }
        />
        <Route
          path="/signin"
          element={
            <h1>Авторизация</h1>
          }
        />
        <Route
          path="/signup"
          element={
            <h1>Регистрация</h1>
          }
        />
        <Route
          path="*"
          element={
            <h1>404</h1>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
