lets talk about controllers.

$.ajax
console.time()
res.download()
console.timeEnd();
res.redirect()
cascading routes.
mongoose
{
timestamps:true
}
forever.
promises,סינכרוני ואסינכרוני

axios

https://prettier.io/docs/en/install.html

mongoose required: error message insted of true.

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

template engin.

const express = require('express'),
router = express.Router();

//exporting thee router to other modules
module.exports = router;
