var express = require('express'); //load the express library into the app.js file
var app = express(); //initialize express
var routes = require('./routes/router');
var ideaEngine = require('./ideas');

var hbs = require('hbs'); //load handlebars library into the app.js file

app.set('view engine', 'html'); //save to use HTML files as views
app.engine('html', hbs.__express); //treat your HTML files as if they were hbs files
app.use(express.static('static'));
//routes:

//app.get('/', function(req, res) {
//	res.render('index', { title : 'Home Page'});
//});

// app.get('/about', function(req,res) {
// 	res.render('about', { title : 'About Page', description : 'This is a practice page!'});
// });

// Port

app.use('/', routes);
app.listen(3000); //listening for code on port 3000 local host.

console.log('Node running on port 3000'); //server confirmation