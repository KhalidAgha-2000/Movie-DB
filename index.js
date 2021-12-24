var express = require('express')
var app = express()
var port = 2500
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

app.listen(port, () => {
    console.log(`Khalid's server is listening to  http://localhost:${port}`)
})