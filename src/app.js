
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 5000;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/sortMiddlewares');




// connect to DB
db.connect2();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded());

app.use(methodOverride('_method'));
app.use(SortMiddleware);

//Http logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./helpers/handlebars')
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
