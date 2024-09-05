"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },    
    rememberMyFilms: function (){
        for (let i = 0; i < 2; i++) {
            let lastFilmName = prompt("Один из последних просмотренных фильмов?", "").trim();
            let lastFilmRating = prompt("На сколько баллов вы его оцените?", "");
            if (lastFilmName != "" && lastFilmName != null && lastFilmName.length < 50 && lastFilmRating != null && lastFilmRating != ""){
                personalMovieDB.movies[lastFilmName] = lastFilmRating;
                console.log ("Done")
            } else {console.log ("Error");
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10) {
            console.log ("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            console.log ("Вы классический зритель");
        } else if (personalMovieDB.count >=30) {
            console.log ("Вы киноман")
        } else {console.log ("error")};
    },
    showMyDB: function (hidden){
        if (!hidden) {
            console.log (personalMovieDB);
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (genre == null || genre == "") {
                console.log ("Вы ввели некорректные данные или не ввели их вообще");
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        }
    }      
};

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();