//Задаем константы
const apiKey = '25f7e215';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-API-KEY': apiKey,
//     'Content-Type': 'application/json',
//   },
// };

//поле ввода
const inputNode = document.querySelector('.js-add__title');
//кнопка поиска
const btnNode = document.querySelector('.js-add__button');
//список фильмов
const movieList = document.querySelector('.js-films');

//Функции
async function fetchData(movieName) {
  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      console.log(data.Search);
      console.log(data.Search[0]);
      console.log(data.Search[0].Title);
      console.log(data.Search[0].Year);
      const data1 = data;
    });

  //return data1;
}

//Выполняемый код
btnNode.addEventListener('click', function () {
  const movieName = inputNode.value;
  console.log(movieName);
  //movieList.innerText = movieName;
  movieList.innerHTML = `
  <div class="card">
          <img src="./img/cover.webp" alt="Cover" class="card__img" />
          <h3 class="card__title">Обливион</h3>
          <p class="card__year">2018</p>
          <p class="card__rate">Рейтинг: 9.2</p>
        </div>
  `;

  const response = fetchData(movieName);
  console.log('result= ', response);
});
