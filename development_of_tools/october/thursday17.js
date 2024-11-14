const data = [];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push('fish');
      reject('Data not loaded');
    }, 1000);
  });
};

const start = new Date();

getData()
  .finally(() => console.log('Start'))
  .then((result) => console.log('Success', result, data))
  .catch((error) => console.log('Error', error))
  .finally(() => {
    console.log('End', new Date() - start);
  });
// getData().then(() => console.log(data));
