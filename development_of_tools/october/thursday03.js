'use strict';

try {
  const a = 1;
  const b = 2;
  c = 3;
} catch (error) {
  console.log('Problem');
  console.log(error.name, error.message, error.stack);
}

console.log('Next do');
