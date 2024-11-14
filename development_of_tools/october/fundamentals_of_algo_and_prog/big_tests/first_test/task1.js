// Task 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

arr = new Proxy(arr, {
  get (target, prop) {
    return target.at(prop);
  },
});

console.log(arr[-1]); // 0
console.log(arr[-2]); // 0
console.log(arr[-3]); // 0
console.log(arr[-4]); // 0
console.log(arr[-5]); // 0
console.log(arr[-6]); // 0
