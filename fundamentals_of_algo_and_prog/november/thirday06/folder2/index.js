document
  .getElementById('contact-form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: document.getElementById('user_name').value,
      from_name: document.getElementById('user_email').value,
      message: document.getElementById('message').value,
    };

    emailjs.init({
      publicKey: 'vpJNxIQdx-wDAi5rU',
    });

    emailjs.send('service_fiurod9', 'template_gon4k8u', templateParams, {});
  });
