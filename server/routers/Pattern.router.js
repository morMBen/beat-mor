const express = require("express")
const router = express.Router()
const auth = require('../middeleware/auth')
const Pattern = require('../models/Patterns.model')
const SoundCollection = require('../models/SoundCollection.model')

router
    .get('/:id', async (req, res) => {

        try {
            const pattern = await Pattern.find({ '_id': req.params.id });
            console.log(pattern)
            res.status(200).send(pattern)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .get('/all/:id', async (req, res) => {
        try {
            const pattern = await SoundCollection.find({ '_id': req.params.id });
            // console.log(pattern)
            res.status(200).send(pattern)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })

module.exports = router;