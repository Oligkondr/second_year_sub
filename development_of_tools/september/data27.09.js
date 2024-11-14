const a = 'Ivan';

// console.log(a.length);
// console.log(typeof a);

const surname = new String('Ivanov');

// console.log(typeof surname);

const user = {
  name: 'Ivan',
  age: 28,
};

// console.log(a.endsWith('Hi'));
// console.log(a.endsWith('an'));

// function Food (name, taste, eng) {
//   this.name = name;
//   this.taste = taste;
//   this.eng = eng;
// }

// const cutlet = new Food('cutlet', 'good', 'meat');
// console.log(cutlet);

class Food {
  name = 'defaultName';
  taste = 'normal';
  ingredients = 'no';

  constructor (name, taste, eng) {
    this.name = name;
    this.taste = taste;
    this.ingredients = eng;
  }

  makeBite () {
    return `You bit the ${this.name}, it tastes ${this.taste}`;
  }

  disassemble () {
    return `You disassemble ${this.name} and get ${this.ingredients.join(', ')}`;
  }
}

// const cutlet = new Food('cutlet', 'good', ['ground meat', 'onion']);
// console.log(cutlet);
// console.log(cutlet.makeBite());
// console.log(cutlet.disassemble());

const Animal = {
  name: 'animal',
  age: 10,
  legs: 4,
};

const Rabbit = {
  name: 'Bunny',
  age: 1,
  __proto__: Animal,
};

// console.log(Rabbit.age);

let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

// console.log( rabbit.jumps ); // ? (1)
// delete rabbit.jumps;
// console.log( rabbit.jumps ); // ? (2)
// delete animal.jumps;
// console.log( rabbit.jumps ); // ? (3)

const head = {
  glasses: 1,
};

const table = {
  pen: 3,
  __proto__: head,
};

const bed = {
  sheet: 1,
  pillow: 1,
  __proto__: table,
};

const pockets = {
  money: 2000,
  __proto__: bed,
};

// console.log(pockets.pen);
// console.log(bed.glasses);

let hamster = {
  stomach: [],

  eat (food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
