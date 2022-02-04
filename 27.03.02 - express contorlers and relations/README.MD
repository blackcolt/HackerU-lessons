mvc recap

res.download()
res.redirect()
cascading routes (next params)

axios

https://prettier.io/docs/en/install.html

router.js (by subject)

Contents of ./app.js:
var express = require('express'),
app = express();
var testRoutes = require('./routes/tests');

// Import my test routes into the path '/test'
app.use('/tests', testRoutes);

Contents of ./routes/tests.js:

var express = require('express'),
router = express.Router();

var automatedRoutes = require('./testRoutes/automated');

router
// Add a binding to handle '/tests'
.get('/', function(){
// render the /tests view
})

the `next` param in a request.
//use middlewere
app.use(function (req, res, next) {
console.log('Time:', Date.now())
next()
})

const express = require('express'),
router = express.Router();

//exporting thee router to other modules
module.exports = router;

template engin.
