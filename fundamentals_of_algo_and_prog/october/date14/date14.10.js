// Первая контрольная - завтра
// Вторя - начало ноября
// Третья - конец ноября
// Не будет пятой пары в среду.

//Proxy ловушка get
// Геттеры и сеттеры

//super
class ChessPiece {
  constructor (position, color) {
    this.position = position;
    this.color = color;
  }

  set position (position) {
    if (!Array.isArray(position) || position.length !== 2) {
      throw new Error('Invalid position');
    }

    position = position.map((pos) => {
      pos = Number(pos);
      if (pos < 0) {
        return 0;
      }
      if (pos > 7) {
        return 7;
      }
      return pos;
    });

    this._x = position[0];
    this._y = position[1];
  }

  get position () {
    return [this._x, this._y];
  }

  move () {
    console.log('Piece moved');
  }
}

class Pawn extends ChessPiece {
  constructor (x, color) {
    const pos = [x, color === 'white' ? 1 : 6];
    // Вызов родительского конструктора
    super(pos, color);
  }

  move () {
    const move = this.color === 'white' ? 1 : -1;
    this.position = [this.position[0], this.position[1] + move];
    super.move();
  }
}

const pown1 = new Pawn(1, 'white');
console.log(pown1.position);
console.log(pown1.color);
console.log(pown1.move());
