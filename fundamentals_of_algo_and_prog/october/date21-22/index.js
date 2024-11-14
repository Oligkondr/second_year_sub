// Получение элемента
const add = document.getElementById('add');
const del = document.getElementById('delete');
const container = document.getElementById('container');

const maxCardsCount = 10;
let cardsCount = 0;

const cardGenerator = () => {
  const block = document.createElement('div');
  const block_title = document.createElement('h2');
  const block_description = document.createElement('p');

  block_title.textContent = 'Title';
  block_description.textContent = 'Description';

  block.classList.add('block');

  block.append(block_title, block_description);
  container.append(block);

  cardsCount++;
};

add.addEventListener('click', () => {
  cardGenerator();
  cardGenerator();
  if (cardsCount >= maxCardsCount) {
    add.classList.add('hide');
    del.classList.remove('hide');
  }
});

del.addEventListener('click', () => {
  // Возвращает массив из элементов
  const blocks = document.querySelectorAll('.block');

  for (const block of blocks) {
    block.remove();
  }
  del.classList.add('hide');
  add.classList.remove('hide');
  cardsCount = 0;
});
