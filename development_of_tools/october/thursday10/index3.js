// Как только два запроса выполняться, отобразить их результат в консоль

const data = [];

const state = {
  count: 0,
  countOfFetch: 2,
  result: [],
};

const previewData = () => {
  if (state.count === state.countOfFetch) {
    console.log(state.result);
  }
};

const firstFetch = () => {
  setTimeout(() => {
    state.count = state.count + 1;
    state.result.push('apple');
    previewData();
  }, 2000);
};

const secondFetch = () => {
  setTimeout(() => {
    state.count = state.count + 1;
    state.result.push('grape');
    previewData();
  }, 2000);
};

firstFetch();
secondFetch();
