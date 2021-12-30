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
app.get("/", (req, res) => {
  res.send("Hello First !!!!!!");
});
app.listen(port, () => console.log(`Runing to http://localhost:${port}`));
