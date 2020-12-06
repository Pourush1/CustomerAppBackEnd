const Customer = require('../models/Customer')

const createCustomer = async (req, res) => {
  const { customerName, customerAddress } = req.body

  try {
    const CustomerModelData = { customerName, customerAddress }
    const customer = await Customer.create(CustomerModelData)
    res.json(customer)
  } catch (err) {
    console.error(err)
    res.status(500).json('Server error')
  }
}

module.exports = { createCustomer }
