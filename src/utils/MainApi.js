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
   * Метод выход из аккаунта.
   *
   * @returns {Request} Запрос на удаления токена
   */
  signOut() {
    return fetch(
      `${this._baseUrl}/signout`,
      {
        credentials: 'include',
      },
    )
      .then(this._getResponseData);
  }

  /**
   * Метод проверяет JWT токен.
   *
   * @returns {Request} Запрос на валидацию токена
   */
  validateToken() {
    return fetch(
      `${this._baseUrl}/users/me`,
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
      `${this._baseUrl}/users/me`,
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

  /**
   * Метод отправляет запрос на сохраненные фильмы пользователя.
   *
   * @returns {Request} запрос на сохраненные фильмы пользователя.
   */
  getMovies() {
    return fetch(
      `${this._baseUrl}/movies`,
      {
        credentials: 'include',
      },
    )
      .then(this._getResponseData);
  }

  /**
   * Метод отправляет запрос на сохранение фильма.
   *
   * @param {String} name Объект информации о фильме
   * @returns {Request} Запрос на сервер для удаления фильма
   */
  saveMovie(movie) {
    return fetch(
      `${this._baseUrl}/movies`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          // eslint-disable-next-line quotes
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      },
    )
      .then(this._getResponseData);
  }

  /**
   * Метод отправляет запрос на сервер для удаление фильма.
   *
   * @param {String} name Объект информации о фильме
   * @returns {Request} Запрос на сервер для удаления фильма
   */
  deleteMovie(movieId) {
    return fetch(
      `${this._baseUrl}/movies/${movieId}`,
      {
        method: 'DELETE',
        credentials: 'include',
      },
    )
      .then(this._getResponseData);
  }
}

const mainApi = new MainApi('http://localhost:3000');

export default mainApi;
