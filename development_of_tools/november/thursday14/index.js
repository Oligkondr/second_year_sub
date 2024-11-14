// const links = document.getElementsByTagName('li');
// if (links) {
//   Array.from(links.forEach(link => link.classList.remove('active')));
// }

window.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const email = formData.get('email');
      console.log(email);
    });
  }
});
