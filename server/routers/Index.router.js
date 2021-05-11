const express = require("express")
const router = express.Router()
const SoundsRouter = require('./Sounds.router')
const UserRouter = require('./user.router')

router.use('/sounds/', SoundsRouter)
router.use('/user/', UserRouter)

module.exports = router;