var express = require('express');
var router = express.Router();
let ArticleController = require('../controllers/article.controller');

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('newArticle');
});

router.post('/new', ArticleController.newArticle);


module.exports = router;
