const express = require('express')
const router = express.Router()

//Customer Logic
const customerController = require("../controllers/customerController")

router.get('/listCustomers',customerController.listCustomers)
router.post('/customerRegistration',customerController.customerRegistration)
router.post('/customerLogin',customerController.customerLogin)


//Agent Logic
const agentController = require("../controllers/agentController")

router.get('/listAgents',agentController.listAgents)
router.post('/agentRegistration',agentController.agentRegistration)
router.post('/agentLogin',agentController.agentLogin)


//Charger Logic
const chargerController = require("../controllers/chargerController")

router.get('/listChargers',chargerController.listChargers)
router.post('/chargerRegistration',chargerController.chargerRegistration)


module.exports = router