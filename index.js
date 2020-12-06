const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const routes = require('./routes')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
})
