const data = [];

// const setData = (thing) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.push(thing);
//       resolve(data);
//     }, 2000);
//   });
// };
//
// setData('stick').then((result) => console.log(result));

// const multiply = (result) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(result);
//       resolve(result * 2);
//     }, 2000);
//   });
// };
//
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// })
//   .then((result) => multiply(result))
//   .then((result) => multiply(result))
//   .then((result) => multiply(result));

async function getName () {
  try {
    const response = await fetch('https://api.github.com/users/Oligkondr');
    const data = await response.json();
    return data.name;
  } catch (e) {
    console.log(e);
  }
}

getName().then((result) => console.log(result));
