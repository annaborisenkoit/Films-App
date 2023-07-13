//DOM элементы
const inputNode = document.querySelector('.js-add__title');
const btnNode = document.querySelector('.js-add__button');
const filmsWrapper = document.querySelector('.films');

let filmsArr = [];

//настройки
const apiKey = 'e319e0fe-b161-453a-8ff2-1626fc7291ef';

const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const options = {
  method: 'GET',
  headers: {
    'X-API-KEY': apiKey,
    'Content-Type': 'application/json',
  },
};

//получение и вывод top 250 фильмов
async function fetchAndRenderFilms() {
  // const response = await fetch(url + 'top', options);
  // const data = await response.json();

  const data = await fetchData(url + 'top', options);

  renderFilms(data.films);
}

async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

function renderFilms(films) {
  for (film of films) {
    //в цикле обходим массив и выводим каждый фильм на экран

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
