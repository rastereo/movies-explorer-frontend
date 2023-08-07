/**
 * Класс авторизация и регистрация, редактирование профиля, проверка токена.
 */
class MainApi {
  constructor(baseUrl) {
    /** Url на который осуществляется запрос */
    this._baseUrl = baseUrl;
  }

  /**
   * Метод добавляет опции к запросу.
   *
   * @param {Object} body Объект с информацией о пользователе
   * @returns {Object}
   */
  _setOptions(body) {
    return {
      method: 'POST',
      credentials: 'include',
      headers: {
        // eslint-disable-next-line quotes
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }

  /**
   * Метод проверяет ответ с сервера.
   *
   * @param {Response} res Ответ от сервера
   * @returns {Response}
   */
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return res.text()
      .then((error) => Promise.reject(JSON.parse(error)));
  }

  /**
   * Метод отправляет запрос на сервер для
   * регистрации пользователя на сайте.
  *
   * @param {String} name Имя
   * @param {String} email Почта
   * @param {String} password Пароль
   * @returns {Request} Запрос на регистрацию
   */
  signUp(name, email, password) {
    return fetch(
      `${this._baseUrl}/signup`,
      this._setOptions({ name, email, password }),
    )
      .then(this._getResponseData);
  }

  /**
   * Метод отправляет запрос на сервер для
   * авторизации пользователя на сайте.
  *
  * @param {String} email Почта
  * @param {String} password Пароль
  * @returns {Request} Запрос на авторизацию
  */
  signIn(email, password) {
    return fetch(
      `${this._baseUrl}/signin`,
      this._setOptions({ email, password }),
    )
      .then(this._getResponseData);
  }

  /**
   * Метод проверяет JWT токен.
   *
   * @returns {void}
   */
  validateToken() {
    return fetch(
      `${this._baseUrl}/user/me`,
      {
        credentials: 'include',
      },
    )
      .then(this._getResponseData);
  }

  /**
   * Метод отправляет запрос на сервер для изменения
   * информации о пользователе.
   *
   * @param {String} name Имя
   * @param {String} email Почта
   * @returns {Request} Запрос на изменения
   * информации о пользователе
   */
  patchProfile(name, email) {
    return fetch(
      `${this._baseUrl}/user/me`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          // eslint-disable-next-line quotes
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      },
    )
      .then(this._getResponseData);
  }
}

const mainApi = new MainApi('https://api.rastereo.diplom.nomoredomains.xyz');

export default mainApi;
