const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorFromDB = (res, dbErrors) => {
  const errors = []
  _.forIn(dbErrors.errors, (error) => errors.push(error.message))
  return res.status(400).json({ errors })
}

const login = (req, res, next) => {
  const email = req.body.email || ''
  const password = req.body.password || ''

  User.findOne({ email }, (err, user) => {
    if (err) {
      return sendErrorFromDB(err)
    } else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user, env.authSecret, {
        expiresIn: '1 day',
      })
      const { name, email } = user
      res.json({ name, email, token })
    } else {
      return res.status(400).send({ errors: ['Usuário/Senha inválidos'] })
    }
  })
}

const validateToken = (req, res, next) => {
  const token = req.body.token || ''
  jwt.verify(token, env.authSecret, (err, decoded) => {
    res.status(200).send({ valid: !err })
  })
}
