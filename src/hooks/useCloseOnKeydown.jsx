import { useEffect } from 'react';

/**
 * Хук закрывает поп-ап по нажатию клавиши ESC.
 *
 * @param {Object} props
 * @param {Function} props.action Действие при нажатии на кнопку.
 */
function useCloseOnKeydown({ action }) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        action();
      }
    }

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });
}

export default useCloseOnKeydown;
