const productsInfo = fetch('https://api.escuelajs.co/api/v1/products')
  .then(res => res.json())
  .then((data) => productCardsGen(data.value));

console.log(productsInfo);

const productsList = document.getElementById('products_list');

const productsBtn = document.getElementById('prdPag');
const categoriesBtn = document.getElementById('ctgPag');
const usersBtn = document.getElementById('usrPag');

const products = document.getElementById('products');
const categories = document.getElementById('categories');
const users = document.getElementById('users');

const addBut = document.getElementById('add_but');
const delBut = document.getElementById('del_but');

const minShowCards = 4;
const maxCount = 10;
let cardId = 0;

const productCardsGen = (info) => {
  info.forEach((subArr) => {
    subArr.forEach((prod) => {

      const parsImg = prod.images[0] ?? './funny_cat';

      const main = document.createElement('div');
      const title = document.createElement('p');
      const price = document.createElement('p');
      const img = document.createElement('img');

      title.textContent = prod.title;
      price.textContent = prod.price;
      img.style.backgroundImage = `url(${parsImg})`;

      main.append(img, price, title);
      productsList.append(main);
    });
  });
};

productsBtn.addEventListener('click', () => {
  products.classList.remove('hide');
  categories.classList.add('hide');
  users.classList.add('hide');
});

categoriesBtn.addEventListener('click', () => {
  products.classList.add('hide');
  categories.classList.remove('hide');
  users.classList.add('hide');
});

users.addEventListener('click', () => {
  products.classList.add('hide');
  categories.classList.add('hide');
  users.classList.remove('hide');
});
