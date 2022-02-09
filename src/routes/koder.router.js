
const express = require('express')

const koders = require('../usecases/koder.usecase')

const router = express.Router()

// GET /koders
router.get('/', async (request, response) => {
  try {
    const allKoders = await koders.getAll()
  
    response.json({
      ok: true,
      koders: allKoders
    })
  } catch (error) {
    response.status(400)
    response.json({
      ok: false,
      message: error.message
    })
  }
})

// GET /koders/:id
router.get('/:id', async (request, response) => {
  try {
    const koderFound = await koders.getById(request.params.id)

    if (!koderFound){
      const error = new Error('Koder not found xoxoxoxo')
      error.status = 404
      throw error
    }
  
    response.json({
      ok: true,
      koder: koderFound
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const koderDeleted = await koders.deleteById(request.params.id)

    response.json({
      ok: true,
      koder: koderDeleted
    })
  } catch (error) {
    response.status(400)
    response.json({
      ok: false,
      message: error.message
    })
  }
})

module.exports = router
