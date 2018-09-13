const express = require('express')
const app = express()

app.use('/api', (req, res, next) => {
  res.send('<h1>Alexandre!!</h1>')
})

module.exports = app