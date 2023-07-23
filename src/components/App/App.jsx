/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom';
import Main from '../Main';

function App() {
  return (
    <Routes>
      <Route
        path="/"
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
          <h1>Сохранённые фильмы</h1>
        }
      />
      <Route
        path="/signin"
        element={
          <h1>Страницы авторизации</h1>
        }
      />
      <Route
        path="/signup"
        element={
          <h1>Страницы регистрации</h1>
        }
      />
    </Routes>
  );
}

export default App;
