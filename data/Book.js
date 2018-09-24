const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  releaseDate: { type: Date, required: true },
  imageUrl: { type: String, required: true }
})

module.exports = mongoose.model('Book', bookSchema)