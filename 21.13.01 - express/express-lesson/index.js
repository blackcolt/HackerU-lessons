const express = require('express')
const app = express()
const port = 3000
app.get('/',  (req, res)=>{
   res.json({"name": "idan"});
})

app.get('/home', (req, res)=>{
    res.json({"name": req.query.name});
})

// app.post('/home', (req, res)=>{
//     res.json({"name": "frompost"});
// });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
