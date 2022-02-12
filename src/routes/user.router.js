
const express = require('express')

const users = require('../usecases/user.usecase')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allUsers = await users.getAll()
    response.json({
      ok: true,
      users: allUsers
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok:false,
      error: error.message || 'Unknown'
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const userCreated = await users.create(request.body)
    
    response.json({
      ok: true,
      user: userCreated
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok:false,
      error: error.message || 'Unknown'
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const userDeleted = await users.deleteById(request.params.id)
    response.json({
      ok: true,
      user: userDeleted
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok:false,
      error: error.message || 'Unknown'
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const userFound = await users.getById(request.params.id)
    response.json({
      ok: true,
      user: userFound
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok:false,
      error: error.message || 'Unknown'
    })
  }
})

module.exports = router
