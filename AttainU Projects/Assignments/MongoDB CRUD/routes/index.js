var express = require('express');
var router = express.Router();
var { UserController } = require('../controller/user.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', UserController.create)

module.exports = router;
