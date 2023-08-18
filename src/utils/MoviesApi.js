/**
 * Класс запроса на фильмы сервиса beatfilm
 */
class MoviesApi {
  constructor(baseUrl) {
    // Url на который осуществляется запрос
    this._baseUrl = baseUrl;
  }

  /**
 * Метод проверяет ответ с сервера.
 *
 * @param {Response} res Ответ от сервера
 * @returns {Object} Тело ответа или ошибка
 */
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return res.text()
      .then((error) => Promise.reject(JSON.parse(error)));
  }

  /**
   * Метод отправляет запрос на получение списка фильмов.
   *
   * @returns {Request} Запрос на список фильмов
   */
  getMovies() {
    return fetch(this._baseUrl)
      .then(this._getResponseData);
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;
