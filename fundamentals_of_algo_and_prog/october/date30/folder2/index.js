async function translate (from, to, text) {

  const url = 'https://top-google-translate.p.rapidapi.com/v3/translate';
  const data = new FormData();
  data.append('sl', from);
  data.append('tl', to);
  data.append('text', text);

  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'bbfbe394ddmshb3db90a1184cfa5p12089ejsn0c1a76600cfa',
      'x-rapidapi-host': 'top-google-translate.p.rapidapi.com',
    },
    body: data,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(response);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// translate('ru', 'en', 'Hello world!');

const inp = document.getElementById('inp');
const trBtn = document.getElementById('trn');
const transField = document.getElementById('translation');
const from = document.getElementById('from');
const to = document.getElementById('to');

trBtn.addEventListener('click', async () => {
  const result = await translate(from.value, to.value, inp.value);
  transField.textContent = result.response;

});

inp.addEventListener('keypress', async (event) => {
  if (event.code === 'Enter') {
    const result = await translate(from.value, to.value, inp.value);
    transField.textContent = result.response;
  }
});
