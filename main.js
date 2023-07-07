const apiKey = 'e319e0fe-b161-453a-8ff2-1626fc7291ef';

const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const options = {
  method: 'GET',
  headers: {
    'X-API-KEY': apiKey,
    'Content-Type': 'application/json',
  },
};

// fetch(url + 'top', options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

const filmsWrapper = document.querySelector('.films');
console.log(filmsWrapper);

async function fetchAndRenderFilms() {
  const response = await fetch(url + 'top', options);
  const data = await response.json();
  console.log(data);
  console.log(data.films);

  for (film of data.films) {
    //в цикле обходим массив и выводим каждый фильм на экран
    console.log(film);

    const html = `<div class="card">
          <img src=${film.posterUrlPreview} alt="Cover" class="card__img" />
          <h3 class="card__title">${film.nameRu}</h3>
          <p class="card__year">${film.year}</p>
          <p class="card__rate">${film.rating}</p>
        </div>`;
    filmsWrapper.insertAdjacentHTML('beforeend', html);
  }
}

fetchAndRenderFilms().catch((err) => console.log(err));
