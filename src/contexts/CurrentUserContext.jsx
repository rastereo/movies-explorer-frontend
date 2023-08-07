import { createContext } from 'react';

/**
 * Контекст, который позволяет передавать данные через дерево компонентов
 * без необходимости передавать пропсы на промежуточных уровнях.
 */
const CurrentUserContext = createContext();

export default CurrentUserContext;
