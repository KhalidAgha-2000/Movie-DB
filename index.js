var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//Mongo DB
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect(
 //url to of database
);
var schemaM = new Schema({
  _id: Number,
  title: String,
  rating: Number,
  year: Number,
}, { collection: 'MoviesModel' }
);
var MoviesModel = mongoose.model("MoviesModel", schemaM);
// Mongo DB
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
      `Status: ${(res.status = 404)}, error: true, message: the movie with id ${req.params.id
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
  var id = movies.length + 1;
  if (!title || !year || year.length < 4 || isNaN(year)) {
    res.send(
      `{status: ${(res.status = 403)}, error:true, message:'you cannot create a movie without providing a title and a year'}`
    );
  } else {
    newMovie = {
      id,
      title,
      year,
      rating,
    };
    movies.push(newMovie);
    res.send({ movies });
  }
});
//Step 8
//Step 9
routerM.get("/delete/:id", (req, res) => {
  var Dmovie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!Dmovie) {
    res.send(
      `{status: ${(res.status = 404)}, error:true, message:'the movie with id  ${req.params.id
      } does not exist'}`
    );
  } else {
    movies = movies.filter((m) => m.id !== parseInt(req.params.id));
    res.send(movies);
  }
});
//Step 9
//Step 10
routerM.get("/update/:id", (req, res) => {
  var { title, year, rating } = req.query;
  var m = movies.find((m) => m.id == req.params.id);
  if (!m || m > movies.length || m < 1) {
    res.send("Enter movie ID!!");
  } else {
    if (title) {
      m.title = title;
    }
    if (year) {
      m.year = year;
    }
    if (rating) {
      m.rating = rating;
    }
    res.send({ movies });
  }
});
//Step 10
//Step 11
//---------------------Verbs--------------------
routerM.get("/vMomies", (req, res) => {
  res.send({ movies });
});
routerM.post("/vPost", (req, res) => {
  var title = req.query.title;
  var year = req.query.year;
  var rating = req.query.rating || 4;
  var id = movies.length + 1;
  if (!title || !year || year.length < 4 || isNaN(year)) {
    res.send(
      `{status: ${(res.status = 403)}, error:true, message:'you cannot create a movie without providing a title and a year'}`
    );
  } else {
    newMovie = {
      id,
      title,
      year,
      rating,
    };
    movies.push(newMovie);
    res.send({ movies });
  }
});
routerM.patch("/vUpdate/:id", (req, res) => {
  var { title, year, rating } = req.query;
  var m = movies.find((m) => m.id == req.params.id);
  if (!m || m > movies.length || m < 1) {
    res.send("Enter movie ID!!");
  } else {
    if (title) {
      m.title = title;
    }
    if (year) {
      m.year = year;
    }
    if (rating) {
      m.rating = rating;
    }
    res.send({ movies });
  }
});
routerM.delete("/vDelete/:id", (req, res) => {
  var Dmovie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!Dmovie) {
    res.send(
      `{status: ${(res.status = 404)}, error:true, message:'the movie with id  ${req.params.id
      } does not exist'}`
    );
  } else {
    movies = movies.filter((m) => m.id !== parseInt(req.params.id));
    res.send(movies);
  }
});
//Step 11
//Step 12
routerM.get('/checkMoviesDB', (req, res) => {
  MoviesModel.find()
    .then(function (doc) {
      res.send({ items: doc });
      console.log(doc)
    });
})
routerM.get('/AddMovieToDB', (req, res) => {
  var item = {
    _id:Math.random(),
    title: req.query.title,
    rating: req.query.rating,
    year: req.query.year
  };

  var data = new MoviesModel(item);
  data.save();

  console.log(item)
  console.log(data)
})

//Step 12

app.get("/", (req, res) => {
  res.send("Hello First !!!!!!");
});
app.listen(port, () => console.log(`Runing to http://localhost:${port}`));
