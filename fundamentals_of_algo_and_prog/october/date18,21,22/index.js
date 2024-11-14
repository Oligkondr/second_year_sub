const info = [{
  image: './images/one.png',
  title: 'Введение',
  topics: ['Как работают сайты. Верстка', 'Возможности HTML, CSS, JS', 'Редактор кода. Codepen', 'Работа с DevTools'],
}, {
  image: './images/two.png',
  title: 'Базовый HTML',
  topics: ['Базовые теги', 'Теги картинок и ссылок', 'Теги таблиц', 'Служебные теги', 'Кодстайл HTML'],
}, {
  image: './images/three.png',
  title: 'Базовый CSS',
  topics: ['Подключение CSS', 'Вес селектора', 'Свойство display', 'Блочная модель и позиционирование', 'Кодстайл CSS'],
}, {
  image: './images/four.png', title: 'Введение в ООП', topics: ['Объекты', 'Конструкторы', 'Классы', 'Наследование'],
}, {
  image: 'https://blog.unif.pro/wp-content/uploads/2017/05/IT.jpg',
  title: 'Введение в ООП',
  topics: ['Объекты', 'Конструкторы', 'Классы', 'Наследование'],
}, {
  image: 'https://blog.unif.pro/wp-content/uploads/2017/05/IT.jpg',
  title: 'Функции',
  topics: ['Объявление и вызов', 'Рекурсия', 'Параметры', 'Оператор return'],
}, {
  image: 'https://blog.unif.pro/wp-content/uploads/2017/05/IT.jpg',
  title: 'Массивы',
  topics: ['Сортировка', 'Поиск в массиве', 'Срезы'],
}, {
  image: 'https://blog.unif.pro/wp-content/uploads/2017/05/IT.jpg',
  title: 'Введение в JS',
  topics: ['Переменные', 'Константы', 'Условия', 'Циклы'],
}, {
  image: 'https://blog.unif.pro/wp-content/uploads/2017/05/IT.jpg',
  title: 'Основы React',
  topics: ['Создание проекта', 'Компоненты', 'Условный рендеринг', 'Роутинг'],
}, {
  image: 'https://blog.unif.pro/wp-content/uploads/2017/05/IT.jpg',
  title: 'Основы flex',
  topics: ['Выравнивание элементов', 'Растягивание элементов', 'Направление элементов'],
}];

const cardsList = document.getElementById('cards_list');
const addBut = document.getElementById('add_but');
const delBut = document.getElementById('del_but');

const minShowCards = 4;
const maxCount = 10;
let cardId = 0;

const createCard = (cardInfo) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('div');
  image.classList.add('card_image');
  image.style.backgroundImage = `url(${cardInfo.image})`;
  // image.classList.add('img_general');

  const card_text = document.createElement('div');
  card_text.classList.add('card_text');

  const title = document.createElement('h3');
  title.classList.add('card_title');
  title.textContent = cardInfo.title;

  const number = document.createElement('p');
  let cardNumber = cardId + 1;
  number.classList.add('card_number');
  number.textContent = cardNumber < 10 ? `0${cardNumber}` : cardNumber;

  const list = document.createElement('ul');
  list.classList.add('card_list');

  for (const topic of cardInfo.topics) {
    const item = document.createElement('li');
    item.classList.add('card_item');
    item.textContent = topic;
    list.append(item);
  }

  card_text.append(title, list);
  card.append(image, card_text, number);
  cardsList.append(card);

  cardId++;
};

// createCard(info[cardId]);
// createCard(info[cardId]);
// createCard(info[cardId]);
// createCard(info[cardId]);

addBut.addEventListener('click', () => {
  createCard(info[cardId]);
  createCard(info[cardId]);

  if (cardId >= maxCount) {
    addBut.classList.add('hide');
    delBut.classList.remove('hide');
  }
});

delBut.addEventListener('click', () => {
  const cards = Object
    .values(document.querySelectorAll('.card'))
    .slice(minShowCards);

  for (const card of cards) {
    card.remove();
  }

  delBut.classList.add('hide');
  addBut.classList.remove('hide');

  cardId = minShowCards;
});
