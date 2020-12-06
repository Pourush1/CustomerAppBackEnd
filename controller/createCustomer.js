const Customer = require('../models/Customer')

const createCustomer = async (req, res) => {
  const { customerName, customerAddress, id } = req.body

  try {
    const CustomerModelData = { customerName, customerAddress, id }
    const customer = await Customer.create(CustomerModelData)
    res.json(customer)
  } catch (err) {
    console.error(err)
    res.status(500).json('Server error')
  }
}

module.exports = { createCustomer }
