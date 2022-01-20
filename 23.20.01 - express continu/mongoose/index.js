const mongoose = require('mongoose'), express = require('express'), app = express(), port = 8080,
Contact = require('./models/contact')

app.use(express.static('public'))
app.use(express.urlencoded())
mongoose.connect('mongodb://0.0.0.0:27017/contacts').then(()=>{
    app.listen(port, ()=>{
        console.info(`listening on port ${port}`);
    })
}).catch(e=>  console.error(e))

app.use((req, res, next)=>{
    if(req.body.name == "idan"){
        res.send("You are banned!")
    } else {
        next()

    }
})

app.get('/insert-stuff',(req, res)=>{
    res.send("1");
})

app.post('/insert-stuff',(req, res)=>{
    const contact = new Contact(req.body)
    contact.save((err, contact)=>{
        console.log(err)
        console.log(contact)
        res.send('1111')
    })
})
