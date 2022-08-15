"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actor : {},
    genres: [],
    privat: false

};

let firstMovie = prompt('Один из последних просмотренных фильмов?','');
let firstMark = +prompt('На сколько оцените его?','');
let secondMovie = prompt('Один из последних просмотренных фильмов?','');
let secondMark = +prompt('На сколько оцените его?','');

personalMovieDB.movies[firstMovie] = firstMark;
personalMovieDB.movies[secondMovie] = secondMark;

console.log(personalMovieDB);






