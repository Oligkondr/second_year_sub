//Local storage - локальное хранилище в браузерах, примерно 10Мб
//В LS данные сохраняются в формате объекта, но ключ и значение должны быть строки

//setItem(key, value) - создать пару
//getItem(key) - получить значение по ключу
//removeItem(key) - удалить пару
//clear() - очистить все пары
//key(id)
//length() - кол-во пар в хранилище

const inp = document.getElementById('inp');
const list = document.getElementById('list');
const clearBtn = document.getElementById('clear');
const addBtn = document.getElementById('add');

const uiGenerator = (taskObj) => {
  const updTaskObj = taskObj;

  const task = document.createElement('div');
  task.classList.add('task');
  if (taskObj.state === 1) {
    task.classList.add('done');
  }

  const li = document.createElement('li');
  li.textContent = taskObj.text;

  const buttons = document.createElement('div');

  const doneBtn = document.createElement('button');
  doneBtn.addEventListener('click', () => {
    task.classList.toggle('done');

    updTaskObj.state = updTaskObj.state === 0 ? 1 : 0;

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[updTaskObj.id] = updTaskObj;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
  doneBtn.classList.add('taskButton');
  doneBtn.textContent = 'done';

  const deleteBtn = document.createElement('button');
  deleteBtn.addEventListener('click', () => {
    if (confirm('Sure?')) {
      task.remove();

      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const newTasks = tasks.filter((task) => task !== li.textContent);

      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  });
  deleteBtn.classList.add('taskButton');
  deleteBtn.textContent = 'delete';

  buttons.append(doneBtn, deleteBtn);
  task.append(li, buttons);
  list.append(task);

  inp.value = '';

  return updTaskObj;
};

const taskGenerator = (newTask) => {
  // const taskObj = { text: newTask, state: 0 };
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  const updTaskObj = uiGenerator({ text: newTask, state: 0, id: tasks.length });

  tasks.push(updTaskObj);

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

if (!localStorage.length) {
  localStorage.setItem('tasks', JSON.stringify([]));
} else {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    uiGenerator(task);
  });
}

inp.addEventListener('keypress', (event) => {
  if (event.code === 'Enter') {
    taskGenerator(inp.value);
  }
});

inp.addEventListener('input', () => {
  inp.value === '' ? addBtn.disabled = true : addBtn.disabled = false;
});

addBtn.addEventListener('click', () => {
  taskGenerator(inp.value);
});

clearBtn.addEventListener('click', () => {
  const conf = confirm('Are you sure?');
  if (conf) {
    localStorage.clear();
  }
});
