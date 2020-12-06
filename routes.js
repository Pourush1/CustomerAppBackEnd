const router = require('express').Router()
const GetCustomerController = require('./controller/customers')
const GetSingleCustomerController = require('./controller/getsinglecustomer')
const AddNewCustomerController = require('./controller/createCustomer')

router.get('/customers', GetCustomerController.customers)
router.get('/:customerId', GetSingleCustomerController.getSingleCustomer)
router.post('/add', AddNewCustomerController.createCustomer)

module.exports = router
