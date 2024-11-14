// Прототипы
// Наследование - один объект может наследовать методы другого

// У каждого объекта есть прототип

// "Object1".isPrototypeOf("Object2")

const myObj = {};

// console.log(Object.isPrototypeOf(myObj));

const animal = {
  type: 'animal',
};

const rabbit = {
  jump: true,
  __proto__: animal,
};

// console.log(animal.isPrototypeOf(rabbit));

// console.log(rabbit.type);
// console.log(rabbit.jump);

console.log(rabbit.hasOwnProperty('type'));
console.log(rabbit.hasOwnProperty('jump'));
