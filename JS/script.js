let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}
let lastFilmName = prompt("Один из последних просмотренных фильмов?", "");
let lastFilmRating = prompt("На сколько баллов вы его оцените?", "");
personalMovieDB.movies[lastFilmName] = lastFilmRating; 
console.log (personalMovieDB);