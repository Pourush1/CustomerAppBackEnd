const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
})
