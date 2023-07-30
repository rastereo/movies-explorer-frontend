import { useState } from 'react';

import MainForm from '../MainForm/MainForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';

/**
 * Компонент страницы регистрации.
 *
 * @returns {React.ReactElement} Register
 */
function Register() {
  // Имя пользователя при регистрации
  const [name, setName] = useState('');
  // Электронная почта пользователя при регистрации
  const [email, setEmail] = useState('');
  // Пароль пользователя при регистрации
  const [password, setPassword] = useState('');

  const {
    handleChangeValidation,
    errors,
    isValid,
    resetForm,
  } = useFormAndValidation();

  function handleChangeValue(setState, evt) {
    setState(evt.target.value);

    handleChangeValidation(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    // eslint-disable-next-line no-alert
    alert(name, email);

    setName('');
    setEmail('');
    setPassword('');
    resetForm();
  }

  return (
    <MainForm
      title="Добро пожаловать!"
      name="register"
      buttonTitle="Зарегистрироваться"
      isRegister
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
        className="main-form__label main-form__error_name_email"
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
  );
}

export default Register;
