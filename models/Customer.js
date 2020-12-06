const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  customerName: String,
  customerAddress: String
})

module.exports = mongoose.model('Customer', customerSchema)
