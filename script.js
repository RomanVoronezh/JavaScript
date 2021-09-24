"use strict";


let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
       
   }

}
rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('Просмотрено мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('Произошла ошибка');
   }
}
detectPersonalLevel();

function showMyDB() {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }
}
function showMyDB();

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i-1] = prompt('Ваш любимый жанр под номером ${i}', '');
   }
}
writeYourGenres();
console.log(personalMovieDB);

/* let i = 0;
do {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
   
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
   i++
}
while (i < 2);
 */


/* while (i < 2) {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
   
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }

   i++
}
 */






/* 
let num = 20;
function sfm() {
   console.log('Hello world');
   num = 10;
}

sfm();
console.log(num);

function calc(a, b) {
   return (a + b);
}
console.log(calc(4, 8));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
   let num = 50;
   return num
}

const anoNum = ret();
console.log(anoNum);

const calc = (a, b) => {
   console.log('1');
   return (a + b);
};

const str = 'teSt';
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let fruit = 'some fruit';
console.log(fruit.indexOf('fruit'));

const logg = 'hello world';
console.log(logg.slice(8));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseFloat(test));
console.log(parseInt(test)); */



