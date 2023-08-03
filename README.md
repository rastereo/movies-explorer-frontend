# movies-explorer-frontend

Дипломная работа Movies Explorer FRONTEND. Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

## Инструкция, как трансформировать хедер

В файле App.jsx на 25 строке есть константа текущего значения состояния авторизации пользователя на сайте isLoggedIn:
```javascript
const [isLoggedIn, setLoggedIn] = useState(false);
```
Для того чтобы поменять хедер с неавторизованного состояния на авторизированное, нужно в useState поменять значение `false` на `true`.

## 🌐Ссылки

+ Сайт: https://rastereo.diplom.nomoredomains.xyz
+ Макет: https://disk.yandex.ru/d/03vQk3Fy1_u0cA
+ Публичный IPv4: 158.160.114.107
+ Домен сервера: https://api.rastereo.diplom.nomoredomains.xyz
+ Github репозиторий: https://github.com/rastereo/movies-explorer-frontend
+ Критерии диплома веб-разработчика: https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html#jsx
