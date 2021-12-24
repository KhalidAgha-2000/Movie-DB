const express = require('express')
const app = express()
const port = 2500

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Khalid's server is listening to  http://localhost:${port}`)
})