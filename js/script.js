"use strict";

const numberOfFilms = +prompt('Сколько вы уже фильмов посмотрели?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
    b = prompt('На сколько оцените его', ''),
    c = prompt("Один из последних просмотренных фильмов", ""),
    d = prompt('На сколько оцените его', '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);