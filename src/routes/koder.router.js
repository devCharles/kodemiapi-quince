
const express = require('express')
const createError = require('http-errors')
const auth = require('../middlewares/auth.middleware')

const koders = require('../usecases/koder.usecase')

const router = express.Router()

// GET /koders
router.get('/', auth, async (request, response) => {
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
  }
)

// GET /koders/:id
router.get('/:id', async (request, response) => {
  try {
    const koderFound = await koders.getById(request.params.id)

    if (!koderFound){
      throw new createError(404, 'Koder not found')
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

router.post('/', async (request, response) => {
  try {
    const koderCreated = await koders.create(request.body)

    response.json({
      ok: true,
      message: 'Koder created'
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const koderUpdated = await koders.updateById(request.params.id, request.body)
    response.json({
      ok: true,
      koder: koderUpdated
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      ok: false,
      message: error.message
    })
  }
})

module.exports = router


/**
 * Crear un middleware que imprima en consola cada que recibimos una peticion con su información
 * [method] [url]
 * 
 * GET /koders
 * POST /koders
 * GET /koders/5gegre
 */
