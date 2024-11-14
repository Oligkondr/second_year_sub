class Animal {
  makeSound () {
    console.log('Rrrr');
  }
}

class Cat extends Animal {
  makeSound () {
    console.log('Meaw');
  }
}

class Dog extends Animal {
  makeSound () {
    console.log('Bark');
  }
}

const cat = new Cat();
const dog = new Dog();

const makeSound = (animal) => {
  animal.makeSound();
};

// makeSound(cat);
// makeSound(dog);

class User {
  name;
  surname;

  constructor (name = 'Shmel', surname = 'Bolshoy') {
    this.name = name;
    this.surname = surname;
  }

  getName () {
    return this.name;
  }

  getSurname () {
    return this.surname;
  }
}

const sh = new User();
const pch = new User('Pchela', 'Malenkaya');

// console.log(sh);
// console.log(sh.getName());
// console.log(sh.getSurname());

// console.log(pch);
// console.log(pch.getName());
// console.log(pch.getSurname());

const users = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }, { id: 4, name: '4' }];
const res1 = users.filter((user) => user.id <= 3);
// console.log(res1);

const words = ['Sheml', 'Pchela', 'Osa'];
const res2 = words.map((word) => word.length);
// console.log(res2);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res3 = nums.reduce((sum, num) => {
  sum += num;
  return sum;
}, 0);
// console.log(res3);

const user = {
  name: 'Kate', surname: 'Guz', getName (nick = 'яблоко') {
    console.log(`${this.name} - ${nick}`);
  },
};

const getName = user.getName;

// setTimeout(user.getName, 1000);
// setTimeout(user.getName.bind(user, 'банан'), 1000);

// setTimeout(getName, 1000);
// setTimeout(getName.bind(user, 'банан'), 1000);

//В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
function sayHi () {
  console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Вася', test: 9,
});
// console.log(bound.test);

//  поправить ошибку в коде
function askPassword (ok, fail, password) {
  if (password == 'rockstar') ok(); else fail();
}

let user2 = {
  name: 'Вася',

  loginOk () {
    console.log(`${this.name} logged in`);
  },

  loginFail () {
    console.log(`${this.name} failed to log in`);
  },
};

const ok = () => user2.loginOk();
const notOk = () => user2.loginFail.bind(user2);

// askPassword(ok, notOk(), 'rockstar');

askPassword(() => user2.loginOk(), () => user2.loginFail.bind(user2), 'rockstar');
console.log('---');

user2.loginOk();

console.log('---');

function test () {
  user2.loginOk();
}

const test2 = test;
test2();
