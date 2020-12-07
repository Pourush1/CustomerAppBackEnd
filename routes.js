const router = require('express').Router()
const GetCustomerController = require('./controller/customers')
const GetSingleCustomerController = require('./controller/getsinglecustomer')
const AddNewCustomerController = require('./controller/createCustomer')
const UpdateCustomerController = require('./controller/updateCustomer')
const DeleteCustomerController = require('./controller/deleteCustomer')

router.get('/customers', GetCustomerController.customers)
router.get('/:customerId', GetSingleCustomerController.getSingleCustomer)
router.post('/add', AddNewCustomerController.createCustomer)
router.post('/:customerId', UpdateCustomerController.updateCustomer)
router.delete('/delete/:customerId', DeleteCustomerController.deleteCustomer)

module.exports = router
