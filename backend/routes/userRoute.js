const express = require('express')
const router = express.Router()

const userController = require("../controllers/userController")

router.get('/user',userController.index)
router.post('/register',userController.show)


module.exports = router