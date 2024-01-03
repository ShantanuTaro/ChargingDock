const express = require('express')
const router = express.Router()

const customerController = require("../controllers/customerController")

router.get('/listCustomers',customerController.listCustomers)
router.post('/customerRegistration',customerController.customerRegistration)
router.post('/customerLogin',customerController.customerLogin)


module.exports = router