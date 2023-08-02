import { useEffect } from 'react';

/**
 * Хук меняет цвет фона страницы с серого на белый.
 */
function useChangeBodyBackground() {
  useEffect(() => {
    const body = document.querySelector('.root');

    body.classList.add('root_background_white');

    return () => {
      body.classList.remove('root_background_white');
    };
  });
}

export default useChangeBodyBackground;
