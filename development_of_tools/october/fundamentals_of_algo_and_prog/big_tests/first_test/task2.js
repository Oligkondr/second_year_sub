const getOlderUser = (user1, user2) => {
  if (user1.age === user2.age) {
    return `${user1.name} and ${user2.name}`;
  }

  if (user1.age > user2.age) {
    return user1.name;
  } else {
    return user2.name;
  }
};

const ocelot = {
  name: 'Ocelot',
  age: '41',
};
const snake = {
  name: 'Snake',
  age: '41',
};

console.log(getOlderUser(ocelot, snake));
