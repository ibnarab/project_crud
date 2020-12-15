require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const expressLayouts = require('express-ejs-layouts');
const bodyparser = require('body-parser');

const produitController = require('./controllers/produitController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('ejs', exphbs({ extname: 'ejs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'ejs'); 


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/produit', produitController);

/*require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs'); 

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);*/
