// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((f) => f.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result;
  result = array.filter((f) => f.director === director); // como no hacer nada en el else??
  return result;
}


// Exercise 3: Calculate the average of a given director's films.
function moviesAverageOfDirector(array, director) {
  let arrayOfGivenDirector = getMoviesFromDirector(array, director);

  let suma = arrayOfGivenDirector.reduce((acumulador, movie) => {
    return acumulador + movie.score;
  }, 0);

  let average = parseFloat((suma / arrayOfGivenDirector.length).toFixed(2));// en teoria hay que ejecutar .toFized(2) pero si lo hago no passa el test
  return average;
};  



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulos = array.map((f) => f.title);
  titulos.sort();
  return titulos.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let sorted = [...movies];
  sorted.sort((a, b) => {
    // Ordenar por año
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    // Si los años son iguales, ordenar por título
    return a.title.localeCompare(b.title);
  });
  return sorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {

  let matchingItems = movies.filter(movie => movie.genre.includes(category))

  let accumulatedByCategory = matchingItems.reduce((acumulador, movie) => {
    return acumulador + movie.score;
  }, 0);

  let averageByCategory = parseFloat((accumulatedByCategory / matchingItems.length).toFixed(2));

  return averageByCategory;

};

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let moviesInMinutes = [];
  moviesInMinutes = movies.map(movie => { // for each movie do ...
    const durationParts = movie.duration.split(' '); // Pick the movie duration attribute and separte the parts of the string based from the Space
    let totalMinutes = 0;
    // Calculate total minutes duration for each element
    durationParts.forEach(part => { // for each part of the movie duration attribute
      if (part.includes('h')) { //include the h part of the duration
        parseInt(part) == 0 ? 0 : totalMinutes += parseInt(part) * 60; // change te h part to minutes and add to totalMinutes variable
      } else if (part.includes('min')) {       //include the min part of the duration
        totalMinutes += parseInt(part); // add the min part of the duration to the totalMinutes variable
      }
    });

    return { // from movies.map
      ...movie,//spread operator for each movie object
      duration: totalMinutes // Change the movie.duration attribute for each movie object
    };
  }
  );

  return moviesInMinutes; // Return new array with movie duration in minutes

};

// sort By duration

// let moviesChanged = hoursToMinutes(movies)  
// moviesChanged.sort((a,b) => parseInt(a.duration) - parseInt(b.duration))
// console.log(moviesChanged);


// Exercise 8: Get the best film of a year

function bestFilmOfYear(movies, year) {

  let yearMovies = movies.filter((f) => f.year === year);// filter films by year

  let bestMovieOfYear = yearMovies.sort((a, b) => a.score - b.score); // order asc by score, and limit the array to 1

  return bestMovieOfYear.slice(-1); // return the last item in the array
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
