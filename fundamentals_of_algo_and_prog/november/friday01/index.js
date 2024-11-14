const regForm = document.getElementById('reg');
const logForm = document.getElementById('log');
const userPage = document.getElementById('userPage');
const greetings = document.getElementById('greetings');
const clearBtn = document.getElementById('clear');
const exitBtn = document.getElementById('exit');
const toRegBtn = document.getElementById('toRegBtn');
const toLogBtn = document.getElementById('toLogBtn');

if (!localStorage.length) {
  localStorage.setItem('users', JSON.stringify([]));
  localStorage.setItem('activeUser', JSON.stringify(''));
}
const users = JSON.parse(localStorage.getItem('users'));
const activeUser = JSON.parse(localStorage.getItem('activeUser'));

if (activeUser === '') {
  logForm.classList.remove('hide');
} else {
  userPage.classList.remove('hide');
  const user = users.filter((user) => user.mail === activeUser);
  greetings.textContent = `Привет, ${user[0].firstName}!`;
}

const formHarvest = (formNode) => {
  const { elements } = formNode;

  return Array.from(elements)
    .filter((elem) => !!elem.name)
    .reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
};

const checkExist = (user) => {
  return users.filter((memUser) => memUser.mail === user.mail);
};

const checkPass = (pass, memPass) => {
  return pass === memPass;
};

logForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const harvest = formHarvest(logForm);
  const memUser = checkExist(harvest);
  if (memUser.length) {
    const rightPass = checkPass(memUser[0].pass, harvest.pass);
    console.log(rightPass);
    if (rightPass) {
      localStorage.setItem('activeUser', JSON.stringify(harvest.mail));
      userPage.classList.remove('hide');
      greetings.textContent = `Привет, ${memUser[0].firstName}!`;
      logForm.classList.add('hide');
    }
  } else {
    alert('User not exist');
  }
});

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const harvest = formHarvest(regForm);

  if (harvest.pass === harvest.repPass) {
    localStorage.setItem('activeUser', JSON.stringify(harvest.mail));
    users.push(harvest);
    localStorage.setItem('users', JSON.stringify(users));
    regForm.classList.add('hide');
    userPage.classList.remove('hide');
    greetings.textContent = `Привет, ${harvest.firstName}!`;
  } else {
    alert('Пароли не совпадают');
  }
});

clearBtn.addEventListener('click', () => {
  localStorage.clear();
});

exitBtn.addEventListener('click', () => {
  localStorage.setItem('activeUser', JSON.stringify(''));
  userPage.classList.add('hide');
  logForm.classList.remove('hide');
});

toRegBtn.addEventListener('click', () => {
  logForm.classList.add('hide');
  regForm.classList.remove('hide');
});

toLogBtn.addEventListener('click', () => {
  logForm.classList.remove('hide');
  regForm.classList.add('hide');
});
