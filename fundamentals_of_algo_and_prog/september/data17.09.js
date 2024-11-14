const card = {
  number: 123456789,
  name: 'Alex',
  'last name': 'The lion',
  balance: -100,
  showBalance: function () {
    console.log(`Ваш баланс: ${this.balance}`);
    return this.balance > 0 ? 'У вас есть деньги)))' : 'Вы нищий(((';
  },
};

// console.log(card.showBalance());
// console.log(card['last name']);

// Конструктор объектов

function User (name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return `User: ${this.name}, age ${this.age}`;
  };
}

const user1 = new User('Melman', 13);

// console.log(user1.info());

function myUser () {
  this.firstname = 'Rufus';
  this.secondname = 'Tax';
}

let user3 = myUser();

function showFullName () {
  return `${this.firstname} ${this.secondname}`;
}

// console.log(showFullName.call(user3));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));

// console.log(`1: ${Math.max.call(null, ...arr)}`);
// console.log(`2: ${Math.max(...arr)}`);

function Pizza (name, sauce, shape) {
  this.name = name;
  this.sauce = sauce;
  this.shape = shape;
  this.show = () => {
    console.log(`Name: ${this.name}`);
  };
  this.changeShape = (newShape) => {
    this.shape = newShape;
  };
}

function changeName (newName) {
  this.name = newName;
  console.log('Name was change');
}

const pizza1 = new Pizza('Margarita', 'pesto', 'square');

// pizza1.show();
// changeName.call(pizza1, 'Mangibitor');
// console.log(pizza1.name);

changeName.call(pizza1, 'Super Mega');
// changeName.apply(pizza1, ['Super Mega']);
