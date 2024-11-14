// Классы в JS

class User {
  constructor (name) {
    this.name = name;
  }

  get name () {
    return this._name + ' is good girl';
  }

  set name (name) {
    if (name.length < 2) {
      console.log('Name is too short');
    }
    this._name = name;
  }

}

// Создание объекта
const user = new User('Nikaydo');
console.log(user.name);
user.name = 'K';

class Animal {
  constructor (name) {
    this.name = name;
    this._speed = 0;
  }

  set speed (speed) {
    if (speed <= 0) {
      return 'Speed is too low';
    } else {
      this._speed = speed;
      console.log(`Speed now ${this._speed}`);
    }
  }

  stop () {
    this._speed = 0;
    console.log('Animal stopped');
  }
}

class Rabbit extends Animal {
  hide = () => {
    console.log(`${this.name} hiding`);
  };
}

const rabbit = new Rabbit('Speedy');
rabbit.speed = -100;
console.log(rabbit._speed);
rabbit._speed = 100;
rabbit.stop();
