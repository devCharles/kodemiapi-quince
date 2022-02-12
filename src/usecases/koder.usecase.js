const createError = require('http-errors')

const Koder = require('../models/koder.model')

function getAll () {
  return Koder.find()
}

function getById (id) {
  return Koder.findById(id)
}

function create (koderData) {
  const newKoder = new Koder(koderData)

  const errors = newKoder.validateSync()

  // if (errors) {
  //   throw new createError(400, 'Validation Failed')
  // }

  return newKoder.save()
}

function deleteById (id) {
  return Koder.findByIdAndDelete(id)
}

function updateById (id, newkoderData) {
  return Koder.findByIdAndUpdate(id, newkoderData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}
