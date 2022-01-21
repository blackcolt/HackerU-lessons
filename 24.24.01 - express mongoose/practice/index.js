const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'))

app.listen(port, ()=>{
    console.info(`Listening on port ${port}`)
});

app.get('/', (req, res)=>{
   fetch('google.com').then(res=>{
       console.log(res);
   })
})

app.get('/read', (req, res)=>{
    fetch('google.com').then(res=>{
        console.log(res);
    })
 })

app.get('/hello', (req, res)=>{
    res.json({"name": "idan"})
})