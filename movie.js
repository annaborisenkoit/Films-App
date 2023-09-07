const apiKey = '25f7e215';
const movieCardNode = document.querySelector(".js-card__wrapper");

const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m

const params = new URLSearchParams(queryString);
const movieID = params.get("id");

// const params = new URLSearchParams(location.search);
// const movieID = params.get("id");
// const movieCardNode = document.querySelector(".js-card__wrapper");

const renderMovie = (card) => {
    movieCardNode.innerHTML = `
      <div class="js-card card__description">
          <div class="card__img">
              <img src=${card.Poster} alt="poster">
          </div>
          <div class="card__list">
              <p class="card__title">${card.Title}</p>
              <p class="card__year">Year: ${card.Year}</p>
              <p class="card__rate">Rated: ${card.Rated}</p>
              <p class="card__title">Released: ${card.Released}</p>
              <p class="card__year">Runtime: ${card.Runtime}</p>
              <p class="card__rate">Genre: ${card.Genre}</p>
              <p class="card__title">Director: ${card.Director}</p>
              <p class="card__year">Writer: ${card.Writer}</p>
              <p class="card__rate">Actors: ${card.Actors}</p>
          </div>
      </div>
      <p class="card__title">${card.Plot}</p>
    `;
  };

fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`)
   .then((response) => { 
    if (response.ok) { 
      return response.json(); 
    } 
    console.log(error); 
    renderError("Error occurred!"); 
  }) 
  .then((response) => { 
    renderMovie(response); 
  })