
const express = require('express')

const kodersRouter = require('./routes/koder.router')

const app = express()
app.use(express.json())

app.use('/koders', kodersRouter)

app.get('/', (request, response) => {
  response.json({
    ok: true,
    message: 'KodemiAPIv1'
  })
})

module.exports = app
