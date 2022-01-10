const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Hello from get!')
})

app.post('/home',(req, res) => {
    res.send('Hello from post!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})