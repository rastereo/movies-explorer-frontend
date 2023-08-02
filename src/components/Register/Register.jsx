import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import MainForm from '../MainForm/MainForm';
import UseFormAndValidation from '../../hooks/useFormAndValidation';

/**
 * Компонент страницы регистрации.
 *
 * @returns {React.ReactElement} Register
 */
function Register() {
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
   * @returns {void}
   */
  function handleChangeValue(setState, evt) {
    setState(evt.target.value);

    handleChangeValidation(evt);
  }

  /**
   * Функция обработчик отправки формы.
   *
   * @param {Event} evt Событие submit.
   * @returns {void}
   */
  function handleSubmit(evt) {
    evt.preventDefault();

    // eslint-disable-next-line no-console
    console.log({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
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
    </main>
  );
}

export default Register;
