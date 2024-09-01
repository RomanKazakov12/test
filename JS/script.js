"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log ("Вы классический зритель");
    } else if (personalMovieDB.count >=30) {
        console.log ("Вы киноман")
    } else {console.log ("error")};
}

detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();