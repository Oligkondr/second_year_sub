window.addEventListener('DOMContentLoaded', () => {
  // const list = document.getElementsByClassName('list')[0];
  // const item = document.createElement('li');
  // item.textContent = 'Onion';
  // list.append(item);
  // list.prepend(item);
  //
  // list.before('Hello')
  // list.after('Hallu')

  const apple = document.getElementById('Apple');
  if (apple) {
    // apple.classList.add('fruit');
    apple.addEventListener('click', () => {
      console.log('click!');
    });
  }

  const textArea = document.getElementById('textArea');
  if (textArea) {
    // console.log(textArea.hasAttribute('row'));
    // textArea.setAttribute('row', '5');
    // textArea.setAttribute('hello', 'world');
    // console.log(textArea.hasAttribute('row'));
    // textArea.removeAttribute('hello');
    // console.log(textArea);
    textArea.addEventListener('input', () => {
      console.log('click!');
    })
  }
});
