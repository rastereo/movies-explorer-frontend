import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MainForm from '../MainForm/MainForm';
import UseFormAndValidation from '../../hooks/useFormAndValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

/**
 * Компонент страницы изменения профиля.
 *
 * @param {Function} props.onLogin Отправить запрос на изменения
 * информации о пользователе на сервер
 * @returns {React.ReactElement} Profile
 */
function Profile({ onUpdate }) {
  // Имя пользователя в профиле.
  const [name, setName] = useState('');
  // Электронная почта в профиле.
  const [email, setEmail] = useState('');
  // Заголовок профиля с именем пользователя.
  const [title, setTitle] = useState('');

  const currentUser = useContext(CurrentUserContext);

  const {
    handleChangeValidation,
    errors,
    isValid,
  } = UseFormAndValidation();

  function handleChangeValue(setState, evt) {
    setState(evt.target.value);

    handleChangeValidation(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    // eslint-disable-next-line no-console
    onUpdate(name, email);
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);

    setTitle(`Привет, ${name}!`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <main className="main-form main-form_type_profile">
      <h1 className="main-form__title main-form__title_type_profile">
        {title}
      </h1>
      <MainForm
        name="profile"
        buttonTitle="Редактировать"
        isValid={isValid}
        isProfile
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <label
          htmlFor="profile-name"
          className="main-form__label main-form__label_type_profile main-form__label_border_bottom"
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
            id="profile-name"
            className={`main-form__input main-form__input_type_profile ${errors.name && 'main-form__input_type_error'}`}
          />
          <span className={`main-form__error ${errors.name && 'main-form__error_visible'}`}>
            {errors.name}
          </span>
        </label>
        <label
          htmlFor="profile-email"
          className="main-form__label main-form__label_type_profile"
        >
          E-mail
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(evt) => handleChangeValue(setEmail, evt)}
            id="profile-email"
            className={`main-form__input main-form__input_type_profile ${errors.email && 'main-form__input_type_error'}`}
          />
          <span className={`main-form__error ${errors.email && 'main-form__error_visible'}`}>
            {errors.email}
          </span>
        </label>
      </MainForm>
      <button
        type="button"
        className="main-form__logout link"
      >
        Выйти из аккаунта
      </button>
    </main>
  );
}

Profile.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default Profile;
