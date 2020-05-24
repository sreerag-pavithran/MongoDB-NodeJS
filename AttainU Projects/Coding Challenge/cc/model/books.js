const mongoose = require('mongoose')

const books = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  auther: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('books', books)