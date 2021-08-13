# Результаты выполнения 


- Создан репозиторий `goit-react-hw-04-movies`
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей
- Для компонентов описаны `propTypes`, и где необходимо, `defaultProps`
- Все что компонент ожидает в виде пропов, передается ему при вызове

## Задание «Кинопоиск»

Создана базовая маршрутизация для приложения поиска и хранения фильмов.

## API themoviedb.org

Для бекенда используется [themoviedb.org API](https://www.themoviedb.org/).
- [https://developers.themoviedb.org/3/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending) - список самых популярных фильмов на сегодня для создания коллекции на главной  странице.
- [https://developers.themoviedb.org/3/search/search-movies](https://developers.themoviedb.org/3/search/search-movies) - поиск кинофильма по ключевому слову на странице фильмов.
- [https://developers.themoviedb.org/3/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details) - запрос полной информации о фильме для страницы кинофильма.
- [https://developers.themoviedb.org/3/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits) - запрос информации о актёрском составе для страницы кинофильма.
- [https://developers.themoviedb.org/3/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews) - запрос обзоров для страницы кинофильма.

[Ссылка на документацию](https://developers.themoviedb.org/3/getting-started/introduction)

## Маршруты

В приложении есть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправляет на домашнюю страницу.

- `'/'` - компонент `<HomePage>`, домашняя страница со списком популярных кинофильмов.
- `'/movies'` - компонент `<MoviesPage>`, страница поиска фильмов по ключевому слову.
- `'/movies/:movieId'` - компонент `<MovieDetailsPage>`, страница с детальной информацией о кинофильме.
- `/movies/:movieId/cast` - компонент `<Cast>`, информация о актерском составе. Рендерится на странице `<MovieDetailsPage>`.
- `/movies/:movieId/reviews` - компонент `<Reviews>`, информация об обзорах. Рендерится на странице `<MovieDetailsPage>`.

## Code Splitting (разделение кода)

Добавлена асинхронную загрузку JS-кода для маршрутов приложения используя `React.lazy()` и `Suspense`.
