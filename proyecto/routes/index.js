var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen final',subtitle:'Avances en computacion' });
});

router.get('/login',function(req, res, next){
	res.render('login',{nombre:'usuario', password:'password'});
});

router.post('/correcto',function(req, res, next){
	res.render('correcto',{nombre:'usuario', password:'password'});
});

module.exports = router;
