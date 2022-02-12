
const bcrypt = require('bcrypt')
const createError = require('http-errors')
const jwt = require('../lib/jwt.lib')

const User = require('../models/user.model')

async function create (userData) {
  const userFound = await User.findOne({ email: userData.email })
  if (userFound) {
    throw new createError(412, 'User already exists')
  }

  const hash = await bcrypt.hash(userData.password, 10)
  userData.password = hash
  return User.create(userData)
}

async function login(email, password) {
  // Paso 1: verificar si el usuario existe
  const userFound = await User.findOne({ email })
  if(!userFound) {
    throw new createError(401, 'Invalid data')
  }

  // Paso 2: verificar que sea el password correcto
  const isValidPassword = await bcrypt.compare(password, userFound.password)
  if (!isValidPassword) {
    throw new createError(401, 'Invalid data')
  }

  // Paso 3: Expedir el token
  return jwt.sign({ id: userFound._id })
}

function deleteById (id) {
  return User.findByIdAndDelete(id)
}

function getAll() {
  return User.find()
}

function getById(id) {
  return User.findById(id)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  login
}