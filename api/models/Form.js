const mongoose = require('mongoose')

const FormShema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String },
  hobbies: { type: String },
})

module.exports = mongoose.model('Form', FormShema)
