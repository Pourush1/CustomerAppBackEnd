const router = require('express').Router()
const GetCustomerController = require('./controller/customers')
const GetSingleCustomerController = require('./controller/getsinglecustomer')
const AddNewCustomerController = require('./controller/createCustomer')
const UpdateCustomerController = require('./controller/updateCustomer')

router.get('/customers', GetCustomerController.customers)
router.get('/:customerId', GetSingleCustomerController.getSingleCustomer)
router.post('/add', AddNewCustomerController.createCustomer)
router.post('/:customerId', UpdateCustomerController.updateCustomer)

module.exports = router
