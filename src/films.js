// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((f) => f.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result;
 result = array.filter((f) => f.director == director ? f : "");
return result;   
} 
  

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrayOfGivenDirector = getMoviesFromDirector(array, director);

  let suma = arrayOfGivenDirector.reduce((acumulador, movie) => {
    return acumulador + movie.score;
  }, 0);

let average = (suma / arrayOfGivenDirector.length);// en teoria hay que ejecutar .toFized(2) pero si lo hago no passa el test
return average; 
}; 
  


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulos = array.map((f) => f.title);
  titulos.sort();
  return titulos.slice(0,20);
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
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
