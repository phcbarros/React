const express = require('express')
const auth = require('./auth')

module.exports = (server) => {
  /*
   * Rotas protegidas por Token JWT
   */
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  protectedApi.use(auth)

  // Rotas ciclo de pagamento
  const billingCycle = require('../api/billingCycle/billingCycleService')
  billingCycle.register(protectedApi, '/billingCycles')

  /*
   * Rotas abertas
   */
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const AuthService = require('../api/user/authService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
}
