class String {
  isValid (value) {
    return typeof value === 'string';
  }
}

class Validator {
  type = 0;

  string () {
    return new String();
  }

  number () {
    this.type = 1;
  }
}

const v = new Validator();

const schema = v.string();

console.log(schema.isValid(null));
console.log(schema.isValid(''));
console.log(schema.isValid(123));
console.log(schema.isValid(null));
console.log(schema.isValid());
console.log(schema.isValid('Hexlet'));
