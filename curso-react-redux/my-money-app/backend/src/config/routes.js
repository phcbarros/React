const express = require('express');

module.exports = server => {

    //Definir URL base para todas as rotas
    const router = express.Router() ;
    server.use('/api', router);

    // Rotas ciclo de pagamento
    const billingCycle = require('../api/billingCycle/billingCycleService');
    billingCycle.register(router, '/billingCycles');
}