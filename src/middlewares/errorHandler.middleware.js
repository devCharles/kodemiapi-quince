
function errorHandler (err, req, res, next) {
  console.log('ERROR HANDLER MIDDLEWARE')
  response.status(err.status || 500)
  response.json({
    ok: false,
    error: err.message || 'Unknown'
  })
}

module.exports = errorHandler
