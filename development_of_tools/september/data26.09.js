// const user = {
//   name: 'Ivan',
//   surname: 'Vasilievich',
//   getName () {
//     console.log(this.name);
//   },
// };

// user.getName();
// const userName = user.getName;
// userName();

// const sayHello = () => console.log('Hi!');
// sayHello();

function Car (name, counter, color, age) {
  this.name = name;
  this.counter = counter;
  this.color = color;
  this.age = age;
}

const BMW = new Car('BMW x7', 'Germany', 'black', '6');
console.log(BMW);
