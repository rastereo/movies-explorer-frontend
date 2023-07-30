import { useEffect } from 'react';

function useClosePopupOnKeydown(props) {
  useEffect(() => {
    function handleEscClose(evt) {
      // eslint-disable-next-line no-unused-expressions
      evt.key === 'Escape' && props.action();
    }

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });
}

export default useClosePopupOnKeydown;
