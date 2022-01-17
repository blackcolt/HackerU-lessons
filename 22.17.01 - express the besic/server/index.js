const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded()); 

//HW COOKBOOK
//names.json -> [
//     {name: "idan"}
// ]
// read json to var (arr)
// arr.push - {"name": dasdsad}
// write all arr to json.
// app.get('*',function(req, res)=>{
// })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/contacts', (req, res, next) => {
    console.log(1)
    res.json(1);
    next()
    //const { name , phone } = req.body 
    // let name = req.body.name
    // let phone = req.body.phone
})

app.post('/contacts', (req, res) => {
    console.log(2)
    res.send();
    //const { name , phone } = req.body 
    // let name = req.body.name
    // let phone = req.body.phone
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})