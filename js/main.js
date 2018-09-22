var movies = [];

function formSubmit() {
  var title = document.getElementById("Title").value;
  var year = document.getElementById("Year").value;
  var isAdult = document.getElementById("Adult").checked;
  var newMovie = new Movie(title, year, isAdult);
  movies.push(newMovie);
  localStorage.setItem("movies", JSON.stringify(movies));
}

function Movie(_title, _year, _isAdult) {
  this.title = _title;
  this.year = _year;
  this.isAdult = _isAdult;
}
