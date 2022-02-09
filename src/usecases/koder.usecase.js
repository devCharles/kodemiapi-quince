
const Koder = require('../models/koder.model')

function getAll () {
  return Koder.find()
}

function getById (id) {
  return Koder.findById(id)
}

function create (koderData) {
  return Koder.create(koderData)
}

function deleteById (id) {
  return Koder.findByIdAndDelete(id)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById
}
