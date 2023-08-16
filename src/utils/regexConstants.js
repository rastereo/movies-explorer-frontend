/** Регулярное выражение проверяет текст на содержание
только латиницы, кириллицы, пробела или дефиса */
const regexName = /^[a-zа-яА-ЯёЁ\s\-]+$/i;
/** Регулярное выражение проверяет текст на английский язык */
const regexEnglishLanguage = /[a-z]/;

export { regexName, regexEnglishLanguage };
