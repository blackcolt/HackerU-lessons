Solve HW.

express basic 
app.get()
app.post()
app.delete()
app.patch()

the `next` param in a request.
//use middlewere
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
process.count // save global things.
app.use
app.use(express.json());

Using app.get add an users route `/reminders` 
In this route return a list of reminders from the DB we created in the homeworks in the previous lesson 
(if you didn't create one, create one now)
Using app.post in the same route `/reminders` (read the body of the request) (using req.body) and insert it to the DB.

serve static files.
app.use(express.static('public'))

lets create client that talks to the server? 

