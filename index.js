var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongodb = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//Mongo DB
var mongoose = require("mongoose");

const Db = require("mongodb/lib/db");
const { query } = require("express");
var Schema = mongoose.Schema;
const dbUrl = //DB url
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connect Successfuly!"))
  .catch((err) => console.log(err));



var schemaM = new Schema({
   title: String,
  rating: Number,
  year: Number,
}, { collection: 'MoviesModel' }
);
var usersM = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
}
);
var MoviesModel = mongoose.model("MoviesModel", schemaM);
var UsersModel = mongoose.model("UsersModel", usersM);
// Mongo DB
var routerM = express.Router();
 var movies = [
  { id: 1, title: "Jaws", year: 1975, rating: 8 },
  { id: 2, title: "Avatar", year: 2009, rating: 7.8 },
  { id: 3, title: "Brazil", year: 1985, rating: 8 },
  { id: 4, title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];
var users = [
  { id: 1, username: "Khalid", password: 2333 },
  { id: 2, username: "Ahmad", password: 2222 },
  { id: 3, username: "Mona", password: 1111 },
  { id: 4, username: "Lora", password: 5555 },
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
     title: req.query.title,
    rating: req.query.rating,
    year: req.query.year
  };
  var data = new MoviesModel(item);
  data.save();
  res.send(`new movie has benn added to your DB! -- ${data}`)
 
})
//Step 12
//Step 13
//-----------------User CRUD---------------
routerM.get("/Users", (req, res) => {
  res.send({ users });
  console.log({ users }, "Hard coded from array ")
});
//Check the collection in DB
routerM.get('/checkUsersDB', (req, res) => {
  UsersModel.find()
    .then(function (doc) {
      res.send({ items: doc });
      console.log(doc, "DB users ")
    });
})
//Add user to DB
routerM.post('/AddUserToDB', (req, res) => {
  var user = {
    username: req.query.username,
    password: req.query.password
  };

  if (!user.username || !user.password) {
    res.send(`{Status: ${res.status = 404}, message : Cannot add user withour providing username or password }`)
  }
  else {
    var data = new UsersModel(user);
    data.save();
    res.send("User Added Successfuly!")
  }
  console.log(user)
  console.log(data)
})
//Delete user from DB
routerM.delete("/DeleteUserDB/:id", (req, res) => {
  var id = req.params.id;
  UsersModel.deleteOne({ _id: ObjectID(id) }, function (err, results) {
    if (err) { res.send(`${err}`) }
    else { res.send("DELETED") }
  });
});
//Update User on DB
routerM.patch('/UpdateUserOnDB/:id', (req, res) => {
  var id = req.params.id
  var username = req.query.username
  var password = req.query.password
  UsersModel.updateOne({ _id: ObjectID(id) }, { $set: { "username": username, "password": password } }, function (err, result) {
    if (err) { res.send(err) }
    else {
      res.send(`${req.params.id} Updated Successfuly `)
    }
  });

})
//Authenticate User  to modify / delete Movies
//ADD Movie
routerM.get('/AuthAdd/:username', (req, res) => {
  var item = {
    title: req.query.title,
    rating: req.query.rating,
    year: req.query.year
  }
  var username = req.params.username
  UsersModel.findOne({ username: username }).then(() => {
    var data = new MoviesModel(item);
    data.save();
    res.send(`new movie has benn added to your DB! -- ${data}`)
  })
})
//DELETE Movie
routerM.delete('/AuthDelete/:username/:mId', (req, res) => {
  var username = req.params.username
  var id = req.params.id;
  UsersModel.findOne({ username: username }).then(() => {
    MoviesModel.deleteOne({ _id: ObjectID(id) }, function (err, results) {
      if (err) { res.send(`${err}`) }
      else { res.send("DELETED") }
    });
  })
})
//UPDATE Movie
routerM.patch('/AuthUpdate/:username/:mId', (req, res) => {
  var id = req.params.id
  var username = req.params.username
  var title = req.query.title
  var rating = req.query.rating
  var year = req.query.year
  UsersModel.findOne({ username: username }).then(() => {
    MoviesModel.updateOne({ _id: ObjectID(id) }, { $set: { "title": title, "rating": rating, "year": year } }, function (err, result) {
      if (err) { res.send(err) }
      else {
        res.send(`${req.params.id} Updated Successfuly `)
      }
    });
  })
})
//Step 13

app.get("/", (req, res) => {
  res.send("Hello First !!!!!!");
});
app.listen(port, () => console.log(`Runing to http://localhost:${port}`));
