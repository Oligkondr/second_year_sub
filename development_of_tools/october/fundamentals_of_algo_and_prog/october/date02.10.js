// Объединение объектов

// Способ 1
const obj1 = { name: 'Kaiman', friend: 'Nikaydo', age: 23 };

const obj2 = { job: 'wizard hunter', victims: '?', age: 32 };

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// Способ 2
const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

const url = new URL('http://www.example.com/dogs/?name=buddy&color=brown');

// console.log(url.href);
// console.log(url.protocol);
// console.log(url.host);
// console.log(typeof url.searchParams);
// console.log(url.protocol);
// console.log(url.protocol);
// url.searchParams.set('age', 19);
// console.log(url.href);

// console.log('a' ?? 'b');
// console.log('a' ?? undefined);
// console.log(null ?? 'b');
// console.log(null ?? undefined);
// console.log(false ?? true);
// console.log(0 ?? 1);
