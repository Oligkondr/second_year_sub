// const sayHello = () => {
//   console.log('Hello');
// };
//
// const main = () => {
//   sayHello();
// };
//
// main()

const data = [];

const getData = () => {
  console.log('Data loading');
  setTimeout(() => {
    data.push('apple', 'pineapple', 'banana', 'oranges');
    console.log('Data loaded');
    console.log('Extra data loading');
    setTimeout(() => {
      data.push('cucumber', 'onion', 'garlic', 'eggplant');
      console.log('Extra data loaded');
      setTimeout(() => {
      }, 2000);
    });
  }, 2000);
};

const useData = (callBack) => {
  callBack();
  console.log(data.length);
};

getData(useData);
