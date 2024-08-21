const router = require('express').Router();

router.get('/', function (req, res) {
	res.render('harugakoumeshu', {
	});
})

router.get('/animate', function (req, res) {
	res.render('animate', {
	});
})

router.get('/valid', function (req, res) {
	res.locals = {
		title: 'Example',
		message: 'This is a message'
	};
	res.render('valid', {
		// additional locals, a custom layout, or other options can be defined here
	});
})

module.exports = router;