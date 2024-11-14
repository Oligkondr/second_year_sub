const getOlderUserArray = (arr) => {

  const strToTime = (str) => {
    const [day, month, year] = str.split('.');
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.getTime();
  };

  return arr.reduce((acc, user) => {
    if (strToTime(acc.birhtday) > strToTime(user.birhtday)) {
      return user;
    }
    return acc;
  }, arr[0])
    .name;

};

const users = [
  { name: 'Kikurage', birhtday: '23.09.2005' },
  { name: 'Nikaydo', birhtday: '02.11.2000' },
  { name: 'Nacuky', birhtday: '02.09.1997' },
  { name: 'Kayman', birhtday: '13.06.1997' },
];

console.log(getOlderUserArray(users));
