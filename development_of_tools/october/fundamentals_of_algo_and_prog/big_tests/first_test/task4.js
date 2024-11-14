class PrintEditionItem {

  set state (newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state () {
    return this._state;
  }

  constructor (name, releaseDate, pagesCount, state = 100, type = null) {
    this.state = state;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = type;
  }

  fix () {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state = 100, type = 'magazine') {
    super(name, releaseDate, pagesCount, state, 'magazine');
  }
}

class Book extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, author, state = 100, type = 'book') {
    super(name, releaseDate, pagesCount, state, 'book');
    this.authir = author;
  }
}

const book1 = new Book('Aboba', 2004, 6, 'Me', 75);
console.log(book1);
book1.fix();
console.log(book1);

const magazin1 = new Magazine('Aboba', 2004, 6, 10);
console.log(magazin1);
magazin1.fix();
console.log(magazin1);
