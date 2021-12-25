var express = require('express')
var app = express()
var port = 2500

var movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

//home url or no entry url
app.get('/', (req, res) => {
    res.send('OK');
    console.log("You went to this url ---> " + req.url);
})
app.get('/home', (req, res) => {
    res.send('OK');
    console.log("You went to this url ---> " + req.url);
})
//test url
app.get('/test', (req, res) => {
    var status = 200;
    var message = "ok";
    res.send(`{ status : ${status} , message:${message} }`)
});
//time url
app.get('/time', (req, res) => {
    var status = 200;
    var today = new Date();
    var time = `${today.getHours()}:${today.getSeconds()}`
    res.send(`{ status : ${status} , message:${time} }`)
});
//ID url
app.get('/hello/:id', (req, res) => {
    var status = 200;
    res.send(`{ status : ${status} , message: Hello , ${req.params.id} }`)
});
//search url
app.get('/search/:date', (req, res) => {
    if (req.params.date === "item") {
        var status = 200;
        res.send(`{ status : ${status} , message: OK , data: ${req.params.date} }`)
    }
    else {
        var error = true
        var status = 500;
        res.send(`{ status : ${status} , Error : ${error} , message: you have to provide a search }`)
    }
});
//url Movies 
app.get('/movies', (req, res) => {
    // var status=200;
    res.send(`{status : 200 , message : Movies}`)
})
//url add/create Movies
app.get('/movies/add', (req, res) => {
    // var status=200;
    res.send(`{status : 200 , message : Add Movies}`)
});

//url get/read Movies 
app.get('/movies/get', (req, res) => {
    res.send({ movies } )
});
//url edit/update Movies
app.get('/movies/edit', (req, res) => {
    // var status=200;
    res.send(`{status : 200 , message : edit Movies}`)
});
//url delete Movies
app.get('/movies/delete', (req, res) => {
    // var status=200;
    res.send(`{status : 200 , message : delete Movies}`)
});
app.listen(port, () => {
    console.log(`Khalid's server is listening to  http://localhost:${port}`)
});