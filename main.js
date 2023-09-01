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

//выполняемый код
btnNode.addEventListener('click', function () {
  const movieName = inputNode.value;
  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

  if (movieName) {
    movieListNode.innerHTML = '';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        searchResults = data.Search;
        movieListNode.innerHTML = '';

        // if (data.Response === 'True') {
        //   searchResults.forEach((movie) => {
        //     const movieHTML = `
        // <div class="card">
        //         <img src="${movie.Poster}" alt="Cover" class="card__img" />
        //         <h3 class="card__title">"${movie.Title}"</h3>
        //         <p class="card__year">"${movie.Year}"</p>
        //         <p class="card__rate">Рейтинг: "${movie.Type}"</p>
        //       </div>
        // `;

        //     movieListNode.insertAdjacentHTML('beforeend', movieHTML);
        //   });
        //}

          if (data.Response === 'False') {
            alert = ('Error ocured')
          }

          else {
          searchResults.forEach((movie) => {
            const movieHTML = `
        <div class="card">
                <img src="${movie.Poster}" alt="Cover" class="card__img" />
                <h3 class="card__title">"${movie.Title}"</h3>
                <p class="card__year">"${movie.Year}"</p>
                <p class="card__rate">Рейтинг: "${movie.Type}"</p>
              </div>
        `;

            movieListNode.insertAdjacentHTML('beforeend', movieHTML);
          });
        }

    });
  }
  clearInput();
  if (!movieName) {
    alert('Необходимо ввести название фильма');
    return;
  }
});
