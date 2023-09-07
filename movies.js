//Задаем константы
const apiKey = '25f7e215';

//DOM элементы
//поле ввода
const inputNode = document.querySelector('.js-add__title');
//кнопка поиска
const btnNode = document.querySelector('.js-add__button');
//список фильмов
const movieListNode = document.querySelector('.js-films');


//функции
function clearInput() {
  inputNode.value = '';
}

function setFocus() {
  inputNode.focus();
}

//выполняемый код
btnNode.addEventListener('click', function () {
  const movieName = inputNode.value.trim();//trim убирает пробелы при вводе названия фильма
  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

  if (movieName) {
    movieListNode.innerHTML = '';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        searchResults = data.Search;
        movieListNode.innerHTML = '';

          if (data.Response === 'True') {
            searchResults.forEach((movie) => {
              const movieHTML = `
                <div  class="js-card card"  id=${movie.imdbID}>
                  <img src="${movie.Poster}" alt="Cover" class="card__img" />
                  <h3 class="card__title">"${movie.Title}"</h3>
                  <p class="card__year">"${movie.Year}"</p>
                  <p class="card__rate">Рейтинг: "${movie.Type}"</p>
                </div>
          `;
              
            movieListNode.insertAdjacentHTML('beforeend', movieHTML);
          });
        } else {
          console.log("Error!");
          movieListNode.innerHTML = `<h3 class="add__button">Movie not found!`;
        }
    });
  }  
  else {
    alert('Enter the name of the movie');
    return;
  }
  clearInput();
  setFocus();
});

const exportMovie = (event) => {
  let target = event.target.closest('.card');
  window.location.href = `movie.html?id=${target.id}`
}

movieListNode.addEventListener('click', exportMovie)
