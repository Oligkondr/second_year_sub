// Защищенные свойсства

// class CoffeeMachine {
//   constructor (power) {
//     this._power = power;
//   }
//
//   get power () {
//     return `Power is ${this._power}`;
//   }
// }

// const machine = new CoffeeMachine(220);
// console.log(machine.power);
// machine.power = 100;
// console.log(machine.power);

// Приватные свойства и методы доступны только внутри класса

// class CoffeeMachine {
//   #waterLimit = 10;
//
//   checkWater (value) {
//     if (value < 0) {
//       throw new Error('Low water level!');
//     }
//     if (value > this.#waterLimit) {
//       throw new Error('Too much water!');
//     }
//     console.log('Water is ready');
//   }
//
//   #drainWater () {
//     this.#waterLimit = 10;
//   }
// }
//
// const machine = new CoffeeMachine();
// machine.checkWater(5);

// Примеси - объект, нужный лишь чтобы его свойства и методы подмешивать в другие объекты.

const mixin = {
  sayBird () {
    console.log('Bird!');
  },
};

class User {
  constructor (name) {
    this.name = name;
  }
}

const user = new User('Edmund');

// Object.assign(user, mixin);
// user.sayBird()

const two = 3 * 1790;
const four = 3 * 2190;
console.log(`За 2: ${two}`);
console.log(`За 4: ${four}`);
console.log(`Разница: ${four - two}`);
