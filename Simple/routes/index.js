var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller')

/* GET home page. */
router.get('/', UserController.show);
router.post('/add', UserController.store);
router.get('/update', UserController.update);

module.exports = router;
