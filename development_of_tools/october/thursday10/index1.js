const getData = (f) => {
  setTimeout(() => {
    data.push('orange');
    f();
  }, 2000);
};

const data = [];

// console.log('1');
// console.log('2');

getData(() => {
  console.log(data);
  data.push('apple');
  console.log(data.length);
});

// console.log('3');
// console.log('4');
// console.log('5');
