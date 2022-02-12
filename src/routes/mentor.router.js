const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
  response.json({
    ok: true,
    message: 'GET MENTORS'
  })
})

module.exports = router