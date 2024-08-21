const router = require('express').Router();

router.get('/', function(req, res){
	res.send('The GET Request on "/api" has been handled by the server.');
})

module.exports = router;