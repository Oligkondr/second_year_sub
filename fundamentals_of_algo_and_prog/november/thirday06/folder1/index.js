// const promise = new Promise(resolve => {
//   resolve(true);
// });
//
// async () => {
//   const x = await promise;
// }

let cssPromise = null;

const loadModalCss = () => {
  cssPromise = new Promise(resolve => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './style.css';
    document.head.append(link);
    link.addEventListener('load', () => {
      resolve();
    });
  });
  return cssPromise;
};

async function askConfirm (text = 'sure?') {
  await loadModalCss();

  return new Promise(resolve => {
    const root = document.createElement('div');
    const win = document.createElement('div');
    const parag = document.createElement('p');
    const btnYes = document.createElement('button');
    const btnNo = document.createElement('button');

    root.classList.add('modal-root');
    win.classList.add('modal-win');

    root.append(win);
    win.append(parag, btnYes, btnNo);
    parag.textContent = text;
    btnYes.textContent = 'Yes';
    btnNo.textContent = 'No';

    document.body.append(root);

    btnYes.addEventListener('click', () => {
      resolve(true);
      root.remove();
    });

    btnNo.addEventListener('click', () => {
      resolve(false);
      root.remove();
    });
  });
}

document.getElementById('opBtn').addEventListener('click', async () => {
  const confirm = await askConfirm();
  console.log(confirm);
});
