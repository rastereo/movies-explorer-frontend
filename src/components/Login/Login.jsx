import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../images/logo.svg';
import MainForm from '../MainForm/MainForm';
import UseFormAndValidation from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';

/**
 * Компонент страницы авторизации.
 *
 * @param {Function} props.onLogin Отправить запрос авторизации на сервер
 * @param {Boolean} props.isLoading Отображать прелоудер
 * @returns {React.ReactElement} Login
 */
function Login({ onLogin, isLoading }) {
  // Электронная почта пользователя при авторизации.
  const [email, setEmail] = useState('');
  // Пароль пользователя при авторизации.
  const [password, setPassword] = useState('');

  const {
    handleChangeValidation,
    errors,
    isValid,
    resetForm,
  } = UseFormAndValidation();

  function handleChangeValue(setState, evt) {
    setState(evt.target.value);

    handleChangeValidation(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin(email, password);

    setEmail('');
    setPassword('');
    resetForm();
  }

  return (
    <main className="main-form">
      <Link to="/">
        <img
          src={logo}
          alt="Логотип Movies Explorer"
          className="logo"
        />
      </Link>
      <h1 className="main-form__title">
        Рады видеть!
      </h1>
      {isLoading
        ? <Preloader />
        : (
          <>
            <MainForm
              name="login"
              buttonTitle="Войти"
              isValid={isValid}
              isLogin
              onSubmit={(evt) => handleSubmit(evt)}
            >
              <label
                htmlFor="login-email"
                className="main-form__label"
              >
                E-mail
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  placeholder="pochta@yandex.ru"
                  onChange={(evt) => handleChangeValue(setEmail, evt)}
                  id="login-email"
                  className={`main-form__input ${errors.email && 'main-form__input_type_error'}`}
                />
                <span className={`main-form__error ${errors.email && 'main-form__error_visible'}`}>
                  {errors.email}
                </span>
              </label>
              <label
                htmlFor="login-password"
                className="main-form__label"
              >
                Пароль
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(evt) => handleChangeValue(setPassword, evt)}
                  id="login-password"
                  className={`main-form__input ${errors.password && 'main-form__input_type_error'}`}
                />
                <span className={`main-form__error ${errors.password && 'main-form__error_visible'}`}>
                  {errors.password}
                </span>
              </label>
            </MainForm>
            <p className="main-form__description">
              Ещё не зарегистрированы?&nbsp;
              <Link
                to="/signup"
                className="main-form__link link"
              >
                Регистрация
              </Link>
            </p>
          </>
        )}
    </main>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Login;
