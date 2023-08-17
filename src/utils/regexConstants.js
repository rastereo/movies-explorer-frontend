/** Регулярное выражение проверяет текст на содержание
только латиницы, кириллицы, пробела или дефиса */
const regexName = /^[a-zа-яА-ЯёЁ\s\-]+$/i;
/** Регулярное выражение проверяет email */
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
/** Регулярное выражение проверяет текст на английский язык */
const regexEnglishLanguage = /[a-z]/;

export { regexName, regexEmail, regexEnglishLanguage };
