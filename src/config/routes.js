const express = require('express')

module.exports = function(server) { 
    //Definir URL Base

    const router = express.Router()
    server.use('/api', router)

    // Rotas dos ciclos de Pagamentos
    const billingCycle = require('../api/billingCycle/billingCycleService')
    
    billingCycle.register(router, '/billingCycles')
}