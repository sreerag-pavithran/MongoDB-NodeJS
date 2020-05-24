var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller');

/* GET home page. */
router.get('/', UserController.index);
router.post('/show', UserController.show);
router.post('/store', UserController.store);
router.post('/update', UserController.update);
router.post('/destroy', UserController.destroy);


module.exports = router;
