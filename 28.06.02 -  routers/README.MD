recap

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

const express = require('express'),
router = express.Router();

//exporting thee router to other modules
module.exports = router;

typescript.
