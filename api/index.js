require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use(cors())

// connect to db
const connectDB = require('./db/connect')

// routers
const FormRouter = require('./routes/form')

// routes
app.use('/api/form', FormRouter)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
