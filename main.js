const express = require('express');
const bodyParser = require('body-parser');
const basicRouter = require('./routes');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', basicRouter);

app.use('/resource', express.static(__dirname + '/resource'));
app.use('/sitemap.xml', express.static(__dirname + '/sitemap.xml'));

app.listen(3000, function () {
	console.log('Listening to port http://127.0.0.1:3000');
})