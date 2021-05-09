const express = require("express")
const router = express.Router()
const Sounds = require('../models/Sounds.model')

router
    .post('/sounds', async (req, res) => {
        const sound = new Sounds(req.body)
        // console.log(sound)
        try {
            await sound.save()
            res.status(201).send(sound)
        } catch (e) {
            console.log(e)
            res.status(400).send(e.message)
        }
    })
    .get('/sounds', async (req, res) => {
        try {
            const sounds = sounds.find();
            if (!sounds.length) {
                res.status(404).send('No sounds was found')
            }
        } catch (e) {
            console.log(e.message)
            res.status(500).send(e)
        }
    })
module.exports = router;