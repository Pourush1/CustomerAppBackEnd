const Customer = require('../models/Customer')

const getSingleCustomer = async (req, res) => {
  const { customerId } = req.params

  try {
    const customer = await Customer.findOne({ id: customerId })
    if (customer) {
      console.log('Response accepted', customer)
      return res.json(customer)
    } else {
      return res.status(404).json('No customer found')
    }
  } catch (err) {
    console.error(err)
    res.status(500).json('Server error')
  }
}

module.exports = { getSingleCustomer }
