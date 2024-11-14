// const loadData = (error) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       error ? reject(error) : resolve('Data loaded');
//     }, 3000);
//   });
// };
//
// const processingData = (data, error) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       error ? reject(error) : resolve('Data processed & ' + data);
//     }, 1000);
//   });
// };
//
// const validateData = (data, error) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       error ? reject(error) : resolve('Data validated & ' + data);
//     }, 2000);
//   });
// };
//
// const saveData = (data, error) => {
//   return new Promise((ans, reject) => {
//     setTimeout(() => {
//       error ? reject(error) : ans('Data saved & ' + data);
//     }, 1000);
//   });
// };
//
// // loadData('No data')
// //   .then((result) => {
// //     console.log(result);
// //     return validateData(result);
// //   })
// //   .then((result) => {
// //     console.log(result);
// //     return processingData(result);
// //   })
// //   .then((result) => {
// //     console.log(result);
// //     return saveData(result);
// //   })
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => console.log(`Error: ${error}`))
// //   .finally(() => console.log('Finish'));
//
// const multiply = (current, prev = 1) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const total = current * prev;
//       console.log(total);
//       resolve(total);
//     }, 2000);
//   });
// };
//
// multiply(2)
//   .then((result) => multiply(2, result))
//   .then((result) => multiply(2, result))
//   .then((result) => multiply(2, result));

const first = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('first request');
    }, 2000);
  });
};
const second = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('second request');
      reject('second request');
    }, 1000);
  });
};
const third = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('third request');
    }, 3000);
  });
};
const fourth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fourth request');
    }, 1000);
  });
};

Promise.any([first(), second(), third(), fourth()]).then((result) => console.log(result));
