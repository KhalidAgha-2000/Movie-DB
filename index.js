var express = require('express')
var app = express()
var port = 2500

app.get('/', (req, res) => {
    res.send('OK');
    console.log("You went to this url ---> " + req.url);
})

app.get('/test', (req, res) => {
    var status = 200;
    var message="ok";
    res.send(`{ status : ${status} , message:${message} }`)
});


app.get('/time' ,(req,res)=>{
    var status = 200;
    var today= new Date();
    var time = `${today.getHours()}:${today.getSeconds()}`
    res.send(`{ status : ${status} , message:${time} }`)
});


app.listen(port, () => {
    console.log(`Khalid's server is listening to  http://localhost:${port}`)
})