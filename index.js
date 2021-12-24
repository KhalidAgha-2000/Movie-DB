var express = require('express')
var app = express()
var port = 2500

app.get('/', (req, res) => {
    res.send('OK');
    console.log("You went to this url ---> " + req.url);
})


app.listen(port, () => {
    console.log(`Khalid's server is listening to  http://localhost:${port}`)
})