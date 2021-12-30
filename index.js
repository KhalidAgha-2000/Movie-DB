var express = require("express");
var bodyParser = require("body-parser");
// var moviesRout = require('./MOVIES/movies.js')
var app = express();

var routerM = express.Router();

var movies = [
  { id: 1, title: "Jaws", year: 1975, rating: 8 },
  { id: 2, title: "Avatar", year: 2009, rating: 7.8 },
  { id: 3, title: "Brazil", year: 1985, rating: 8 },
  { id: 4, title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];
var port = 2500;
app.use(bodyParser.json());
app.use("/Movies", routerM);
//Step 3
routerM.get("/test", (req, res) => {
  res.send(`{status : ${(res.status = 200)} , message : OK}`);
});
routerM.get("/time", (req, res) => {
  var today = new Date();
  var time = `${today.getHours()}:${today.getSeconds()}`;
  res.send(`{status : ${(res.status = 200)} , message : ${time}}`);
});
//Step 3
//Step 4
routerM.get("/hello/:id", (req, res) => {
  res.send(
    `{status: ${(res.status = 200)}, message : Hello, ${req.params.id} }`
  );
});
routerM.get("/search", (req, res) => {
  var s = req.query.s;
  if (!s) {
    res.send(
      `{status: ${(res.status = 500)}, error : true, message: you have to provide a search}`
    );
  } else {
    res.send(`{status: ${(res.status = 200)}, message : ok ,data : ${s}}`);
  }
});
//Step 4
//Step 5
routerM.get("/getMovies", (req, res) => {
  res.send({ movies });
});
//Edit
routerM.get("/getMovies", (req, res) => {
  res.send({ movies });
});
//Delete
routerM.get("/getMovies", (req, res) => {
  res.send({ movies });
});
//Update
routerM.get("/getMovies", (req, res) => {
  res.send({ movies });
});
//Step 5
//Step 6
//url get by rating
routerM.get("/by-rate", (req, res) => {
  var sortRate = movies.sort((a, b) => {
    return b.rating - a.rating;
  });
  res.send({ "status ": 200, "data:": sortRate });
});
//url get by date
routerM.get("/by-date", (req, res) => {
  const sortYear = movies.sort((a, b) => (a.year > b.year ? 1 : -1));
  res.send({ status: 200, "data: ": sortYear });
});
//url get by title
routerM.get("/by-title", (req, res) => {
  const sortTitle = movies.sort((a, b) => (a.title > b.title ? 1 : -1));
  res.send({ status: 200, "data: ": sortTitle });
});
//Step 6
//Step 7
routerM.get("/byID/:id", (req, res) => {
  const moviee = movies.find((m) => m.id === parseInt(req.params.id));
  if (!moviee) {
    res.send(
      `Status: ${(res.status = 404)}, error: true, message: the movie with id ${
        req.params.id
      } does not exist `
    );
  } else {
    res.send({
      "status ": (res.status = 200),
      "data ":
        "title: " +
        moviee.title +
        ", rating: " +
        moviee.rating +
        ",year:" +
        moviee.year,
    });
  }
});
//Step 7
//Step 8
//url Add/create  Movies
routerM.get("/add", (req, res) => {
  var title = req.query.title;
  var year = req.query.year;
  var rating = req.query.rating || 4;
  if (!title || !year || year.length < 4 || isNaN(year)) {
    res.send(
      `{status: ${(res.status = 403)}, error:true, message:'you cannot create a movie without providing a title and a year'}`
    );
  } else {
    newMovie = {
      title,
      year,
      rating,
    };
    movies.push(newMovie);
    res.send({ movies });
  }
});

//Step 8
app.get("/", (req, res) => {
  res.send("Hello First !!!!!!");
});
app.listen(port, () => console.log(`Runing to http://localhost:${port}`));
