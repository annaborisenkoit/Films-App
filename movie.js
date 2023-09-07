const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m

const urlParams = new URLSearchParams(queryString);