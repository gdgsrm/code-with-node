const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');


app.use(mainRoutes);
app.use("/cards", cardRoutes);

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});