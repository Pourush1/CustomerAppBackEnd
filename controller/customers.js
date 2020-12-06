const Customer = require('../models/Customer')

const customers = async (req, res) => {
  try {
    const customers = await Customer.find()
    if (customers) {
      console.log('Response accepted')
      return res.json(customers)
    } else {
      return res.status(404).json('No customers found')
    }
  } catch (err) {
    console.error(err)
    res.status(500).json('Server error')
  }
}

module.exports = { customers }
