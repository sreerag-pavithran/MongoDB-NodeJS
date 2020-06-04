const Article = require('../models/article.model');

const newArticle = (req, res)=>{
    let article = new Article(req.body)
    article.save()
    .then((response)=>{
        res.render('single', { article: article })
    })
    .catch((err)=> {
        res.send('Error occured')
    })
}

const allArticle = (req, res)=>{
    Article.find()
    .then((article)=>{
        res.render('index', { article: article })
        console.log(article)
    })
    .catch((err)=>{
        res.send('Error occured')
    })
}

module.exports = {
    newArticle, allArticle
}