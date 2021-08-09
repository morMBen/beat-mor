const express = require("express")
const router = express.Router()
const SoundsRouter = require('./Sounds.router')
const UserRouter = require('./user.router')
const SoundCollection = require('./SoundCollection.router')
const Patterns = require('./Pattern.router')

router.use('/sounds/', SoundsRouter)
router.use('/users/', UserRouter)
router.use('/sound-collection/', SoundCollection)
router.use('/patterns/', Patterns)

module.exports = router;