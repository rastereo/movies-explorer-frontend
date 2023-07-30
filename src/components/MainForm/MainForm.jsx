import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MainForm.css';
import logo from '../../images/logo.svg';
import useChangeBodyBackground from '../../hooks/useChangeBodyBackground';

/**
 * Компонент главной формы.
 *
 * @param {Object} props
 * @param {String} props.title Текст заголовка.
 * @param {String} props.name Имя Формы.
 * @param {React.ReactNode} props.children Инпуты формы.
 * @param {String} props.buttonTitle Текст кнопки submit.
 * @param {Boolean} props.isRegister Состояние, при котором.
 * меняется текст и линк после submit.
 * @param {Boolean} props.isValid Валидация формы.
 * @param {Function} props.onSubmit Действие при отправки формы.
 * @returns {React.ReactElement} MainForm.
 */
function MainForm({
  title,
  name,
  children,
  buttonTitle,
  isRegister,
  isValid,
  onSubmit,
}) {
  useChangeBodyBackground();

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
        {title}
      </h1>
      <form
        action="#"
        name={name}
        onSubmit={onSubmit}
        className="main-form__form"
      >
        {children}
        <button
          type="submit"
          disabled={!isValid}
          className={`main-form__submit link ${!isValid && 'main-form__submit_disabled'}`}
        >
          {buttonTitle || 'Сохранить'}
        </button>
        {isRegister
          ? (
            <p className="main-form__description">
              Уже зарегистрированы?&nbsp;
              <Link
                to="/signin"
                className="main-form__link link"
              >
                Войти
              </Link>
            </p>
          )
          : (
            <p className="main-form__description">
              Ещё не зарегистрированы?&nbsp;
              <Link
                to="/signup"
                className="main-form__link link"
              >
                Регистрация
              </Link>
            </p>
          )}
      </form>
    </main>
  );
}

MainForm.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isRegister: PropTypes.bool,
};

MainForm.defaultProps = {
  isRegister: false,
};

export default MainForm;
