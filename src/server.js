
const express = require('express')

const loggerMiddleware = require('./middlewares/logger.middleware')

const kodersRouter = require('./routes/koder.router')
const mentorsRouter = require('./routes/mentor.router')
const usersRouter = require('./routes/user.router')
const authRouter = require('./routes/auth.router')

const app = express()

app.use(express.json())
app.use(loggerMiddleware)

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (request, response) => {
  response.json({
    ok: true,
    message: 'KodemiAPIv1'
  })
})

module.exports = app
