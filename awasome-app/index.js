const express = require('express')
const { writeJsonSync, readJsonSync } = require('fs-extra');

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/contacts', (req, res, next)=>{
    try {
        let jsonNames = readJsonSync('./public/names.json');
        jsonNames.push({ ...req.body});
        writeJsonSync('./public/names.json', jsonNames);
    } catch (error) {
        res.json({sucess: false, ...req.body})
    }
    res.json({sucess: true, ...req.body})
})

app.get('/contacts', (req, res, next)=>{
    res.json(readJsonSync('./public/names.json'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})