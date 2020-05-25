let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let Article = mongoose.model('Article', articleSchema);
module.exports = Article;