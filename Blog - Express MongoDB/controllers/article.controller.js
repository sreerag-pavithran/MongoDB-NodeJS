const Article = require('../models/article.model');

const newArticle = (req, res)=>{
    let article = new Article(req.body)
    article.save()
    .then((response)=>{
        res.render('index', { article: article })
    })
    .catch((err)=> {
        res.send('Error occured')
    })
}

const allArticle = (req, res)=>{
    Article.find()
    .then((article)=>{
        res.render('index', { article: article })
    })
    .catch((err)=>{
        res.send('Error occured')
    })
}

module.exports = {
    newArticle, allArticle
}