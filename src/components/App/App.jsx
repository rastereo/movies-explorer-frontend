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

import moviesData from '../../utils/data/moviesData';

/**
 * Корневой компонент приложения.
 *
 * @returns {React.ReactElement} App
 */
function App() {
  // Меняет контент, когда пользователь зашел в аккаунт
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setLoggedIn] = useState(false);

  const location = useLocation();

  return (
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
            <Header
              isLoggedIn={isLoggedIn}
            />
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
            <Header
              isLoggedIn={isLoggedIn}
            />
            <SavedMovies moviesData={moviesData.slice(0, 3)} />
            <Footer />
          </>
        )}
      />
      <Route
        path="/profile"
        element={(
          <>
            <Header
              isLoggedIn={isLoggedIn}
            />
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
  );
}

export default App;
