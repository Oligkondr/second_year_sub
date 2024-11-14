const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, num) => {
  acc += num;
  return acc;
}, 0);

// console.log(sum);

const salaries = [
  { name: 'user1', salary: 1000 },
  { name: 'user1', salary: 1000 },
  { name: 'user1', salary: 1000 },
];

let sumOfSal1 = 0;

for (const salary of salaries) {
  sumOfSal1 += salary.salary;
}

const sumOfSal2 = salaries.reduce((acc, user) => {
  return acc + user.salary;
}, 0);

// console.log(sumOfSal1);
// console.log(sumOfSal2);

class Money {
  constructor (value, currency) {
    this.value = value;
    this.currency = currency;
  }

  getValue () {
    return this.value;
  }

  static getRate() {

  }
}
