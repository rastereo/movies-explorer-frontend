class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
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
   * Метод отправляет запрос на получения списка фильмов.
   *
   * @returns {Request} Запрос на фильмы
   */
  getMovies() {
    return fetch(this._baseUrl)
      .then(this._getResponseData);
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;
