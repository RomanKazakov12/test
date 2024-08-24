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
let lastFilmNameB = prompt("Один из последних просмотренных фильмов?", "");
let lastFilmRatingB = prompt("На сколько баллов вы его оцените?", "");
personalMovieDB.movies[lastFilmName] = lastFilmRating; 
personalMovieDB.movies[lastFilmNameB] = lastFilmRatingB; 
console.log (personalMovieDB);