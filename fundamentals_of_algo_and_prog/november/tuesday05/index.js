const fNs = document.getElementById('filmsName');

const baseUrl = 'https://www.swapi.tech/api/';

const filmList = (films) => {
  films.forEach((film) => {
    const name = document.createElement('p');
    name.textContent = film.properties.title;
    fNs.append(name);
  });
};

fetch(`${baseUrl}films/`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    filmList(data.result);
  });
