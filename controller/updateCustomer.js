const Customer = require('../models/Customer')

const updateCustomer = async (req, res) => {
  const { customerId } = req.params

  try {
    const customer = await Customer.findOne({ _id: customerId })
    if (!customer) {
      res.status(400).json('data not found')
    } else {
      customer.customerName = req.body.customerName
      customer.customerAddress = req.body.customerAddress

      customer
        .save()
        .then(customer => {
          res.json('Data updated')
        })
        .catch(err => {
          res.status(400).json('Update not possible')
        })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json('Server error')
  }
}

module.exports = { updateCustomer }
