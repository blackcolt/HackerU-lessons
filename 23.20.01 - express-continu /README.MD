Solve HW.

app.delete()
app.patch()
app.all()

cascading routes.


router


router.js (by subject)

const express = require('express'),
      router = express.Router();
//exporting thee router to other modules
module.exports = router;

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
