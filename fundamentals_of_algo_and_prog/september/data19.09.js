const company = {
  f1: () => {
    console.log(this);
  }, f2 () {
    console.log(this);
  },
};

// const obj = {
//   f1, f2,
// };

// obj.f1();
// obj.f2();

company.f1();
company.f2();

const printer = {
  items: [1],
  print () {
    this.items.forEach(() => console.log(this.items));
  },
};

printer.print();
