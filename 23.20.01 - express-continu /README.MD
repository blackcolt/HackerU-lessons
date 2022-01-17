Solve HW.

app.delete()
app.patch()

the `next` param in a request.
//use middlewere
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
process.count // save global things.

template engin.
