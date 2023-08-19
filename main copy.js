// //DOM элементы
// const inputNode = document.querySelector('.js-add__title');
// const btnNode = document.querySelector('.js-add__button');
// const filmsWrapper = document.querySelector('.films');

// let filmsArr = [];

// //настройки
// // const apiKey = 'e319e0fe-b161-453a-8ff2-1626fc7291ef';
// const apiKey = '25f7e215';

// // const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
// const url = 'https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-API-KEY': apiKey,
//     'Content-Type': 'application/json',
//   },
// };

// //получение и вывод top фильмов
// async function fetchAndRenderFilms() {
//   //const data = await fetchData(url + 'top', options);
//   const data = await fetchData(url, options);

//   renderFilms(data.films);
// }

// async function fetchData(url, options) {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   return data;
// }

// function renderFilms(films) {
//   for (film of films) {
//     //в цикле обходим массив и выводим каждый фильм на экран

//     // const html = `<div class="card">
//     //       <img src=${film.posterUrlPreview} alt="Cover" class="card__img" />
//     //       <h3 class="card__title">${film.nameRu}</h3>
//     //       <p class="card__year">${film.year}</p>
//     //       <p class="card__rate">${film.rating}</p>
//     //     </div>`;

//     `<div class="card">
//           <img src=${film.Poster} alt="Cover" class="card__img" />
//           <h3 class="card__title">${film.Title}</h3>
//           <p class="card__year">${film.Year}</p>
//           <p class="card__rate">${film.Type}</p>
//         </div>`;
//     filmsWrapper.insertAdjacentHTML('beforeend', html);
//   }
// }

// fetchAndRenderFilms().catch((err) => console.log(err));

// btnNode.addEventListener('click', function () {
//   const movieName = inputNode.value;
//   const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;
//   if (movieName.length <= 0) {
//     searchResultNode.innerHTML = `<h3 class="msg">Please enter a movie name...</h3>`;
//   } else {
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);
//         if (data.Response === 'False') {
//           renderNoFindings();
//         } else {
//           //renderSearchResult(data);
//           renderFilms(films);
//         }
//       });
//   }
// });

//настройки
const apiKey = '25f7e215';

//DOM элементы
//поле ввода
const movieInputFieldNode = document.querySelector('.js-add__title');
//кнопка поиска
const movieSearchButtonNode = document.querySelector('.js-add__button');
//список фильмов
const movieListOutputNode = document.querySelector('.js-films');
//ошибка
const errorOutputNode = document.querySelector('.js-error');

//Функции
const init = () => (movieListOutputNode.innerText = 'Здесь пока пусто');
init();

const checkInput = () => (!movieInputFieldNode.value.trim() ? false : true);

const changeLocation = (movieID) =>
  (window.location.href = `movieInfo.html?id=${movieID}`);

const clearMovieInput = () => (movieInputFieldNode.value = '');

const putFocusToInput = () => movieInputFieldNode.focus();

const renderError = (message_error) => {
  errorOutputNode.innerText = `${message_error}`;
  clearMovieInput();
  putFocusToInput();
};

const renderSearchResult = (searchResult) => {
  let searchResultMarkup = '';
  searchResult.Search.forEach((movie) => {
    let movieImage = movie['Poster'];
    movieImage === 'n/a'
      ? (movieImage = 'resourses/Movie & Film Poster.jpg')
      : (movieImage = movie['Poster']);
    searchResultMarkup += `
      <
      `;
  });
};
