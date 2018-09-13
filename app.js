const express = require('express')
const app = express()
const port = 3000

app.use('/api', (req, res, next) => {
  res.send('<h1>Hello Alexandre!!</h1>')
})

app.listen(port, () => console.log('Running...'))