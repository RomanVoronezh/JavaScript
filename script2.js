let i = 0;
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



while (i < 2) {
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
console.log(parseInt(test));


function first() {
   setTimeout(function () {
      console.log(1)
   }, 500);
}

function second() {
   console.log(2);
}

first();
second();


function learnJS(lang, callback) {
   console.log(`Я учу ${lang}`);
   callback();
}
function done() {
   console.log('Я прошел урок');
}
learnJS('JavaScript', done);

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function () {
      console.log('Test');
   }
};
options.makeTest();

const { border, bg } = options.colors;
console.log(border);

console.log(Object.keys(options).length);
/* delete options.name;
console.log(options); */

for (let key in options) {
   if (typeof (options[key]) == 'object') {
      for (let i )
   }
   console.log(`Свойство ${key} имеет значение ${options[key]} `);
}