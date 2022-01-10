const express = require('express');
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

app.post('/users', (req, res, next)=>{
    res.send("1111");
})