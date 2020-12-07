const request = require('supertest')
const app = require('../app')

const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')
const Customer = require('../models/Customer')

beforeAll(async () => {
  await mongoose.connect(db, { useNewUrlParser: true })
})

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    await collection.deleteMany()
  }
}

// Cleaning up all the test data from the collections from the CustomerTest Database
afterEach(async () => {
  await removeAllCollections()
})

test('Should save user to database', async () => {
  const response = await request(app)
    .post('/add')
    .send({
      customerName: 'Raghav',
      customerAddress: 'Nepal'
    })

  const customer = await Customer.findOne({
    customerName: 'Raghav'
  })

  expect(response.body.customerName).toBeTruthy()
  expect(response.body.customerAddress).toBeTruthy()

  expect(customer.customerName).toBeTruthy()
  expect(customer.customerAddress).toBeTruthy()
})

test('Should fetch customer information', async () => {
  const response = await request(app)
    .get('/customers')
    .send()
    .expect(200)
  expect(response.body.length).toEqual(2)
})
