const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

require('./routes/pokemonsRoutes')(app)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
