window.addEventListener('DOMContentLoaded', () => {

  console.log('DOMContentLoaded');

  const firstButton = document.getElementById('first_button');
  const secondButton = document.getElementById('second_button');
  const container = document.getElementById('container');
  const link = document.getElementById('link');

  if (firstButton) {
    firstButton.addEventListener('click', (e) => {
      alert('First button');
    });
  }

  if (secondButton) {
    secondButton.addEventListener('click', (e) => {
      alert('Second button');
    });
  }

  if (container) {

    container.onwheel = (e) => {
      console.log('onwheel ', e);
    };

    container.addEventListener('wheel', (e) => {
      console.log('wheeeeeeel', e);
    });

    container.addEventListener('click', (e) => {
      alert('Container');
    });
  }

  if (link) {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log('Модальное окно типа открылось');
    });
  }
});

window.addEventListener('load', () => {
  console.log('load');
});

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  console.log('beforeunload');
});
