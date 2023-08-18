import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainForm from '../MainForm/MainForm';
import Preloader from '../Preloader/Preloader';

import UseFormAndValidation from '../../hooks/useFormAndValidation';

import logo from '../../images/logo.svg';

/**
 * Компонент страницы регистрации.
 *
 * @param {Object} props
 * @param {Function} props.onRegister Отправить запрос регистрации на сервер
 * @param {Boolean} props.isLoading Отображать прелоудер
 * @returns {React.ReactElement}
 */
function Register({ onRegister, isLoading }) {
  // Имя пользователя при регистрации.
  const [name, setName] = useState('');
  // Электронная почта пользователя при регистрации.
  const [email, setEmail] = useState('');
  // Пароль пользователя при регистрации.
  const [password, setPassword] = useState('');

  // Хук валидации формы.
  const {
    handleChangeValidation,
    errors,
    isValid,
    resetForm,
  } = UseFormAndValidation();

  /**
   * Функция добавляет контент из инпута в выбранный стейт.
   *
   * @param {ReferenceState} setState Название сэтера состояния.
   * @param {Event} evt Событие из которого нужно извлечь текст.
   */
  function handleChangeValue(setState, evt) {
    setState(evt.target.value);

    handleChangeValidation(evt);
  }

  /**
   * Функция обработчик отправки формы.
   *
   * @param {Event} evt Событие submit.
   */
  function handleSubmit(evt) {
    evt.preventDefault();

    onRegister(name, email, password);

    resetForm();
  }

  return (
    <main className="main-form">
      <Link
        to="/"
        className="main-form__logo"
      >
        <img
          src={logo}
          alt="Логотип Movies Explorer"
          className="logo"
        />
      </Link>
      <h1 className="main-form__title">
        Добро пожаловать!
      </h1>
      {isLoading
        ? <Preloader />
        : (
          <>
            <MainForm
              name="register"
              buttonTitle="Зарегистрироваться"
              isValid={isValid}
              onSubmit={(evt) => handleSubmit(evt)}
            >
              <label
                htmlFor="register-name"
                className="main-form__label"
              >
                Имя
                <input
                  type="text"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  required
                  value={name}
                  placeholder="Виталий"
                  onChange={(evt) => handleChangeValue(setName, evt)}
                  id="register-name"
                  className={`main-form__input ${errors.name && 'main-form__input_type_error'}`}
                />
                <span className={`main-form__error ${errors.name && 'main-form__error_visible'}`}>
                  {errors.name}
                </span>
              </label>
              <label
                htmlFor="register-email"
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
                  id="register-email"
                  className={`main-form__input ${errors.email && 'main-form__input_type_error'}`}
                />
                <span className={`main-form__error ${errors.email && 'main-form__error_visible'}`}>
                  {errors.email}
                </span>
              </label>
              <label
                htmlFor="register-password"
                className="main-form__label"
              >
                Пароль
                <input
                  type="password"
                  name="password"
                  minLength="8"
                  required
                  value={password}
                  onChange={(evt) => handleChangeValue(setPassword, evt)}
                  id="register-password"
                  className={`main-form__input ${errors.password && 'main-form__input_type_error'}`}
                />
                <span className={`main-form__error ${errors.password && 'main-form__error_visible'}`}>
                  {errors.password}
                </span>
              </label>
            </MainForm>
            <p className="main-form__description">
              Уже зарегистрированы?&nbsp;
              <Link
                to="/signin"
                className="main-form__link link"
              >
                Войти
              </Link>
            </p>
          </>
        )}
    </main>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Register;
