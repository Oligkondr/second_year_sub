// синхронный и асинхронный код
// преимущества: доступность интерфейса и загрузка данных

// отправка запроса на сервер
// fetch(url, [options])

// клиент-сервисное взаимодействие
// клиент отправляет запрос на сервер и тот ему отвечает

// GET
// PUT
// POST
// SAVE
// DELETE

// ответ сервера
//3 -
//4 -
//5 -

// Асинхронные функции и промисы
// Асинхронные функции возвращают промисы
// 3 состояния ожидания, выполнено успешно, выполнено с ошибкой
//

// async function getData (url) {
//   let data = await fetch(url);
//   data = await data.json();
//   return data;
// }

// async function getName () {
//   const responsePromise = await fetch('https://reqres.in/api/users');
//   const response = await responsePromise.json();
//   const data = response.data;
//   console.log('Пункт №1');
//   // console.log(data);
//
//   console.log('Пункт №2');
//   data.forEach((user) => console.log(user.last_name));
//
//   console.log('Пункт №3');
//   data.forEach((user) => {
//     if (user.last_name.startsWith('W')) {
//       console.log(user);
//     }
//   });
//
//   console.log('Пункт №4');
//   const usersNames = data
//     .reduce((acc, user) => {
//       acc.push(`${user.first_name} ${user.last_name}`);
//       return acc;
//     }, [])
//     .join(', ');
//   console.log(`Наша база содержит данные следующих пользователей: ${usersNames}`);
//
//   console.log('Пункт №5');
//   console.log(Object.keys(data[0]));
// }
//
// getName();

// const url = 'https://chinese-food-db.p.rapidapi.com/';

async function getData (url) {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'bbfbe394ddmshb3db90a1184cfa5p12089ejsn0c1a76600cfa',
      'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(response.status);
    console.log(response);
    return result;
  } catch (error) {
    console.error(error);
  }
}

getData('https://chinese-food-db.p.rapidapi.com/');

async function providData () {
  const response = await getData('https://chinese-food-db.p.rapidapi.com/');
  response.forEach((item) => {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    h2.textContent = item.title;
    img.src = item.imag;
  });
}
