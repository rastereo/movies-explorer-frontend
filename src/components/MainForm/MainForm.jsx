import PropTypes from 'prop-types';

import './MainForm.css';
import UseChangeBodyBackground from '../../hooks/useChangeBodyBackground';

/**
 * Компонент главной формы.
 *
 * @param {Object} props
 * @param {String} props.name Имя Формы.
 * @param {String} props.buttonTitle Текст кнопки submit.
 * @param {Boolean} props.isLogin Состояние, при котором
 * меняется отступ сверху у кнопки submit.
 * @param {Boolean} props.isProfile Состояние, при котором
 * меняется дизайн кнопки submit.
 * @param {Boolean} props.isValid Валидация формы.
 * @param {Function} props.onSubmit Действие при отправки формы.
 * @param {React.ReactNode} props.children Инпуты формы.
 * @returns {React.ReactElement}
 */
function MainForm({
  name,
  buttonTitle,
  isLogin,
  isProfile,
  isValid,
  onSubmit,
  children,
}) {
  return (
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
        className={'main-form__submit link '
          + `${!isValid && 'main-form__submit_disabled'} `
          + `${isLogin && 'main-form__submit_size_big'} `
          + `${isProfile && 'main-form__submit_type_profile'} `
          + `${isProfile && !isValid && 'main-form__submit_background_none'}`}
      >
        {buttonTitle || 'Сохранить'}
      </button>
      <UseChangeBodyBackground />
    </form>
  );
}

MainForm.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  isProfile: PropTypes.bool,
};

MainForm.defaultProps = {
  isLogin: false,
  isProfile: false,
};

export default MainForm;
