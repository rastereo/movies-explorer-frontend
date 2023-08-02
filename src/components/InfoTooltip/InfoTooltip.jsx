import PropTypes from 'prop-types';

import UseClosePopupOnKeydown from '../../hooks/UseClosePopupOnKeydown';

import './InfoTooltip.css';

/**
 * Компонент поп-ап подсказка при успешной/неуспешной отправки формы,
 *
 * @param {Object} props
 * @param {Boolean} props.isOpen Текущее значение состояния видимости
 * подсказки с информацией.
 * @param {Boolean} props.isError Текущее значение состояния ошибки
 * при отправки формы.
 * @param {String} props.tooltip Текущее значение состояния сообщения
 * в подсказке.
 * @param {Function} props.onClose Функция закрывает поп-ап подсказку.
 * @returns {React.ReactElement} <Movies />
 */
function InfoTooltip({
  isOpen,
  isError,
  tooltip,
  onClose,
}) {
  return (
    <div
      className={`popup popup_name_info-tooltip ${isOpen && 'popup_opened'}`}
      onClick={(evt) => evt.target.classList.contains('popup') && onClose()}
      role="presentation"
    >
      <div className="popup__container">
        <div className={`popup__icon ${isError && 'popup__icon_type_unsuccessful'}`}>
        </div>
        <h3 className="popup__title popup__title_position_center">
          {tooltip}
        </h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть поп-ап"
          className="popup__close-button"
        >
        </button>
      </div>
      {isOpen && <UseClosePopupOnKeydown action={onClose} />}
    </div>
  );
}

InfoTooltip.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  tooltip: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default InfoTooltip;