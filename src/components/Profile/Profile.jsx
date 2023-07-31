import { useState } from 'react';

import MainForm from '../MainForm/MainForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';

/**
 * Компонент страницы изменения профиля.
 *
 * @returns {React.ReactElement} Profile
 */
function Profile() {
  // Имя пользователя в профиле.
  const [name, setName] = useState('Виталий');
  // Электронная почта в профиле.
  const [email, setEmail] = useState('pochta@yandex.ru');
  // Заголовок профиля с именем пользователя.
  const [title, setTitle] = useState(`Привет, ${name}!`);

  const {
    handleChangeValidation,
    errors,
    isValid,
  } = useFormAndValidation();

  function handleChangeValue(setState, evt) {
    setState(evt.target.value);

    handleChangeValidation(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    // eslint-disable-next-line no-console
    console.log({ name, email });

    setTitle(`Привет, ${name}!`);
  }

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

export default Profile;
