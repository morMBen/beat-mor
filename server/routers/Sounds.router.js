const express = require("express")
const router = express.Router()
const auth = require('../middeleware/auth')
const Sounds = require('../models/Sounds.model')


router
    //Add new sound
    .post('/', auth, async (req, res) => {
        const sound = new Sounds({
            ...req.body,
            owner: req.user._id
        })
        try {
            await sound.save()
            res.status(201).send(sound)
        } catch (e) {
            res.status(400).send(e)
        }
    })
    .get('/list', async (req, res) => {
        try {
            const sound = await Sounds.find();

            res.status(200).send(sound.map(e => {
                return { _id: e._id, name: e.name, tags: e.tags }
            }))
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .get('/tags/:name', async (req, res) => {
        try {
            const sound = await Sounds.find({ tags: { "$in": [req.params.name] } }).select('name tags');
            res.status(200).send(sound)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .get('/tags', async (req, res) => {
        try {
            const sound = await Sounds.find({}).select('tags');
            const tags = [];
            sound.forEach(e => {
                e.tags.forEach(tag => {
                    if (!tags.includes(tag)) {
                        tags.push(tag)
                    }
                })
            })
            res.status(200).send(tags)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const sound = await Sounds.find({ '_id': req.params.id });
            res.status(200).send(sound)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .get('/', async (req, res) => {
        try {
            const sound = await Sounds.find();
            res.status(200).send(sound)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .get('/search/:string', async (req, res) => {
        try {
            // req.params.string
            const sound = await Sounds.find({ "name": { $regex: req.params.string, "$options": 'i' } }).select('name tags');
            res.status(200).send(sound)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })

// const fs
// const multer = require('multer');
// const upload = multer({
//     //The way to save the sounds to file system
//     // dest: 'audio',
//     limits: {
//         fileSize: 2000000
//     },
//     fileFilter(req, file, cb) {
//         // if (!file.originalname.endsWith('.wav')) {
//         if (!file.originalname.match(/\.(wav|mp3)$/)) {
//             cb(new Error('file must be an wav or mp3'))
//         }
//         cb(undefined, true)
//     },
// })

// router
//     .post('/sounds/upload', upload.single('audio'), async (req, res) => {
//         // console.log(req.file.buffer)
//         const sound = new Sounds(req.body)
//         sound.audio = req.file.buffer
//         // console.log(req.file.buffer)
//         await sound.save()
//         res.send()
//     }, (error, req, res, next) => {
//         res.status(400).send({ error: error.message })
//     })


// .get('/sounds/:id', async (req, res) => {
//     try {
//         const sounds = await Sounds.findById(req.params.id)
//         if (!sounds || !sounds.audio) {
//             throw new Error('No sound was found')
//         }
//         res.set('Content-type', 'audio/wav')
//         res.status(200).send(sounds.audio)
//     } catch (e) {
//         console.log(e.message)
//         res.status(500).send(e)
//     }
// })
module.exports = router;