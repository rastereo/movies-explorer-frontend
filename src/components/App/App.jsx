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
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { regexEnglishLanguage } from '../../utils/regexConstants';

/**
 * Корневой компонент приложения.
 *
 * @returns {React.ReactElement}
 */
function App() {
  // Текущее значение состояния авторизации пользователя на сайте.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Текущее значение состояния информации о зарегистрированном пользователе.
  const [currentUser, setCurrentUser] = useState(null);
  // Текущее значение состояния фильмов с BeatFilm.
  const [movies, setMovies] = useState(null);
  // Текущее значение состояния найденных фильмов.
  const [foundedMovies, setFoundedMovies] = useState(null);
  // Текущее значение состояния сохраненных фильмов.
  const [savedMovies, setSavedMovies] = useState(null);
  // Текущее значение состояния подсказки при поиске фильма.
  const [searchHint, setSearchHint] = useState('');
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
   */
  function signOutAccount() {
    mainApi.signOut()
      .then(() => {
        setIsLoggedIn(false);

        setCurrentUser(null);
        setFoundedMovies(null);
        setSavedMovies(null);

        localStorage.clear();

        navigate('/', { replace: true });
      })
      .catch((err) => handleInfoTooltip(err.message, true));
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
      .catch((err) => handleInfoTooltip(err.message, true))
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
      .catch((err) => handleInfoTooltip(err.message, true))
      .finally(() => setIsLoading(false));
  }

  /**
   * Функция обработки запроса на изменение профиля пользователя.
   *
   * @param {Sting} name Имя
   * @param {String} email Почта
   */
  function handleUpdateProfile(name, email) {
    mainApi.patchProfile(name, email)
      .then((user) => {
        setCurrentUser(user.data);
        handleInfoTooltip('Данные в профиле изменены!');
      })
      .catch((err) => {
        handleInfoTooltip(err.message, true);
      });
  }

  /**
   * Функция добавляет/удаляет сохраненный фильм.
   *
   * @param {String} movie Информация о фильме
   * @param {Boolean} isSave Сохранить фильм
   */
  function handleActionMovies(movie, isSave) {
    if (isSave) {
      if (savedMovies !== null) {
        setSavedMovies((movieList) => [...movieList, movie]);
      } else {
        setSavedMovies([movie]);
      }
    } else {
      setSavedMovies((movieList) => {
        const filterMovieList = movieList.filter((
          (savedMovie) => savedMovie.movieId !== movie.movieId
        ));

        if (filterMovieList.length === 0) return null;

        return filterMovieList;
      });
    }
  }

  /**
   * Функция фильтрации фильмов.
   *
   * @param {String} movieList Список Фильмов
   * @param {String} nameMovie Название фильма
   * @param {Boolean} short Искать короткометражки
   */
  function filterMovies(movieList, nameMovie, short) {
    const lowerCaseName = nameMovie.toLowerCase();

    let result = [];

    let languageName = 'nameRU';

    if (regexEnglishLanguage.test(lowerCaseName)) {
      languageName = 'nameEN';
    }

    result = movieList.filter((movie) => (
      movie[languageName].toLowerCase().includes(lowerCaseName)
    ));

    if (short) {
      result = result.filter((item) => item.duration < 40);
    }

    if (result.length !== 0) {
      setFoundedMovies(result);

      localStorage.setItem('saved-search-history', JSON.stringify({ nameMovie, short }));
    } else {
      setSearchHint('Ничего не найдено');

      localStorage.clear();
    }
  }

  /**
   * Функция поиска фильмов на сервере BeatFilm.
   *
   * @param {String} nameMovie Фильм, который ищем
   * @param {Boolean} short Искать короткометражку
   */
  function searchMovies(nameMovie, short) {
    setIsLoading(true);
    setFoundedMovies(null);

    if (movies === null) {
      moviesApi.getMovies()
        .then((data) => {
          setMovies(data);

          filterMovies(data, nameMovie, short);
        })
        .catch((err) => {
          setSearchHint('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');

          // eslint-disable-next-line no-console
          console.log(err.message);
        })
        .finally(() => setIsLoading(false));
    } else {
      filterMovies(movies, nameMovie, short);

      setIsLoading(false);
    }
  }

  /**
   * Функция обработки кнопки checkbox короткометражных фильмов.
   *
   * @param {String} name Название фильма
   * @param {Boolean} isChecked Состояние чекбокса
   */
  function handleCheckboxShortMovies(name, isChecked) {
    if (name !== '') searchMovies(name, isChecked);
  }

  useEffect(() => {
    /**
     * Функция проверяет валидность JWT токена.
     */
    function checkToken() {
      const path = location.pathname;

      mainApi.validateToken()
        .then((user) => {
          setIsLoggedIn(true);
          setCurrentUser(user.data);

          if (path !== '/signin' && path !== '/signup') {
            navigate(path, { replace: true });
          } else {
            navigate('/movies', { replace: true });
          }
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }

    if (isLoggedIn) {
      mainApi.getMovies()
        .then((movieList) => setSavedMovies(movieList.data))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err.message));
    } else {
      checkToken();
    }
  }, [isLoggedIn]);

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
              <ProtectedRouteElement
                element={Movies}
                isLoggedIn={isLoggedIn}
                moviesData={foundedMovies}
                savedMovies={savedMovies}
                searchHint={searchHint}
                setSearchHint={setSearchHint}
                onSearch={searchMovies}
                onShort={handleCheckboxShortMovies}
                onActionMovie={handleActionMovies}
                isLoading={isLoading}
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
              <ProtectedRouteElement
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                moviesData={savedMovies}
                isLoading={isLoading}
                onActionMovie={handleActionMovies}
                searchHint={searchHint}
                setSearchHint={setSearchHint}
              />
              <Footer />
            </>
          )}
        />
        <Route
          path="/profile"
          element={(
            <>
              <Header isLoggedIn={isLoggedIn} />
              <ProtectedRouteElement
                element={Profile}
                isLoggedIn={isLoggedIn}
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
