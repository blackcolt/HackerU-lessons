const express = require('express');
const JSONStream = require('JSONStream')
var mongojs = require('mongojs');
var db = mongojs('0.0.0.0/node-db');

const app = express();
app.use(express.json());
app.use(express.static('public'))

app.listen(3000, () =>{
    console.info("App listning in port 3000")
})
// process.count = 0;

app.get('/home', (req, res, next)=>{
   res.json({"name": process.count++ })
})

app.get('/reminders', (req, res, next)=>{
    db.collection('reminders').find(function (err, docs) {
        res.json(docs);
    })
})

app.post('/reminders', (req, res)=>{
    res.json(db.collection('reminders').insert(req.body));
})