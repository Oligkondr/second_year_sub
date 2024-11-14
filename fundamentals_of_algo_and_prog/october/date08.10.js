let target = {};
target = new Proxy(target, {});

// Ловушка для прокси
// get - чтение свойства
// set - запись
// has - проверка на существование
// deleteProperty - удаление свойства
// ownKeys - получить все свойства

let numbers = [100, 200, 300];

numbers = new Proxy(numbers, {
  get (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 'No value';
    }
  },
});

// console.log(numbers[0]);
// console.log(numbers[5]);

let dictionary = {
  'привет': 'hello',
  'пчела': 'bee',
  'печенье': 'cookie',
  'кот': 'cat',
};

dictionary = new Proxy(dictionary, {
  get (target, prop) {
    if (prop in target) {
      return target[prop];
    }

    return prop;
  },
});

// console.log('пчела' in dictionary);
// console.log(dictionary['пчела']);
