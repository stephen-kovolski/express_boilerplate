const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')

const myMotel = require('./my_motel.js')
const indexRouter = require('./routes/index.js')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/view')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)
app.use(express.json());



//res.sendFile(__dirname + "/public/index.html");
//const path = process.cwd() + '/html/home.html';

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));




