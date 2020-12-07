const Customer = require('../models/Customer')

const deleteCustomer = async (req, res) => {
  const { customerId } = req.params

  try {
    const customer = await Customer.findByIdAndDelete({ _id: customerId })
    if (!customer) {
      res.status(400).json('data not found')
    } else {
      res.status(200).json('Successfully deleted')
    }
  } catch (err) {
    console.error(err)
    res.status(500).json('Server error')
  }
}

module.exports = { deleteCustomer }
