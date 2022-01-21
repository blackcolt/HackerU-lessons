const express = require('express')
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {
        helpers: {
            idan() { return 'body!!!!'; }
        }
    });
});

app.listen(3000);