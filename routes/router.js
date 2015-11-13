var express = require('express');

var router = express.Router();

var ideaEngine = require{'../ideas'}

routes.get('/', function(res, res){
	res.render('index', { title : 'Home Page', ideas : ideaEngine.getIdeas()});
});

routes.get('/about', function(req, res){
	res.render('about', { title : 'About Page', description : 'This is a practice page!'})
});

route.get('/article/:id', function(req, res){
	var idea = ideaEngine.getOneIdea(req.param.id)
	res.render('article', {idea:idea})
});

module.exports = router;