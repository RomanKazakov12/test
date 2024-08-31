"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}
for (let i = 0; i < 2; i++) {
    let lastFilmName = prompt("Один из последних просмотренных фильмов?", "");
    let lastFilmRating = prompt("На сколько баллов вы его оцените?", "");
    if (lastFilmName != "" && lastFilmName != null && lastFilmName.length < 50 && lastFilmRating != null && lastFilmRating != ""){
        personalMovieDB.movies[lastFilmName] = lastFilmRating;
        console.log ("Done")
    } else {console.log ("Error");
        i--;
    }
}

console.log (personalMovieDB);
if (personalMovieDB.count < 10) {
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log ("Вы классический зритель");
} else {console.log ("Вы киноман")}