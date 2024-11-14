// new - создает объект, вызывает функцию конструктор и устанавливает контекст

function Car () {

}

const car1 = new Car();
const car2 = new Car();

// console.log(typeof car1);

Car.prototype.color = null;

// console.log(car1.color);
// console.log(car2.color);

const emptyOBJ = new Object();

const str1 = 'hello';
const str2 = new String('bye');

// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());

// console.log(typeof str1);
// console.log(typeof str2);

const birthday = new Date();
// console.log(birthday);

const birthday1 = new Date(2005, 8, 24);
// console.log(birthday1);

let second = 0;

// let start = Date.now();
// let stopper = setInterval(() => {
//   console.log(second);
//   second++;
//   if (second > 10) {
//     clearInterval(stopper);
//     let finish = Date.now();
//     console.log(finish - start);
//   }
// }, 1000);

// const timer = (func) => {
//   let seconds = 0;
//   while (seconds < 10) {
//     let temp = Date.now();
//     const a = Date.now();
//     setInterval(() => console.log('Bird'), 500);
//     const b = Date.now();
//     temp = b - a;
//     if (temp === 1000) {
//       seconds++;
//     }
//     console.log(temp);
//     console.log(seconds);
//   }
// };
//
// timer();

let seconds = 0;
let first = Date.now();

while (true) {
  let deltaSeconds = (Date.now() - first) / 1000;
  if (seconds != Math.floor(deltaSeconds)) {
    seconds = deltaSeconds;
    console.log(seconds);
  }
}
