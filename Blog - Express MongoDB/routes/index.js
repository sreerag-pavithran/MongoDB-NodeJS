var express = require('express');
var router = express.Router();
var ArticleController = require('../controllers/article.controller')

/* GET home page. */
router.get('/' , ArticleController.allArticle);



module.exports = router;
