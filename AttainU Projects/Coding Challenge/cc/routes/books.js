const express = require('express')
const router = express.Router()
const book = require('../model/books')

// Getting all
router.get('/', async (req, res) => {
  try {
    const books = await book.find()
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getBook, (req, res) => {
  res.json(res.subscriber)
})

// Creating one
router.post('/', async (req, res) => {
  const subscriber = new book({
    name: req.body.name,
    auther: req.body.auther,
    genre: req.body.genre,
    publishedDate: req.body.publishedDate,
    Rating: req.body.Rating
  })
  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getBook, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name
  }
  if (req.body.auther != null) {
    res.subscriber.auther = req.body.auther
  }
  if (req.body.genre != null) {
    res.subscriber.genre = req.body.genre
  }
  if (req.body.publishedDate != null) {
    res.subscriber.publishedDate = req.body.publishedDate
  }
  if (req.body.Rating != null) {
    res.subscriber.Rating = req.body.Rating
  }
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getBook, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: 'Deleted book info' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getBook(req, res, next) {
  let book
  try {
    book = await book.findById(req.params.id)
    if (book == null) {
      return res.status(404).json({ message: 'Cannot find book' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.subscriber = book
  next()
}

module.exports = router