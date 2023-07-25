import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Main from '../Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * Корневой компонент приложения.
 * @returns {React.ReactElement} <App />
 */
function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          index
          element={<Main />}
        />
        <Route
          path="/movies"
          element={
            <h1>Фильмы</h1>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <h1>Сохранённые фильмы</h1>
          }
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
