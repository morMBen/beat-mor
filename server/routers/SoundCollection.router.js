const express = require("express")
const router = express.Router()
const auth = require('../middeleware/auth')
const SoundCollection = require('../models/SoundCollection.model')
const Patterns = require('../models/Patterns.model')


router
    //Add new sound-collection
    .post('/', auth, async (req, res) => {
        const sC = new SoundCollection({
            ...req.body,
            owner: req.user._id,
            ownerName: req.user.userName
        })
        console.log(sC._id)
        try {
            await sC.save()
            res.status(201).send(sC)
        } catch (e) {
            console.log(e.message)
            res.status(400).send({ 'error': e.message })
        }
    })
    .get('/', async (req, res) => {
        try {
            const sound = await SoundCollection.find({}).select('name ownerName');

            res.status(200).send(sound)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const sound = await SoundCollection.find({ '_id': req.params.id });
            res.status(200).send(sound)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .patch('/update/:id', auth, async (req, res) => {
        try {
            const pattern = new Patterns({ ...req.body, owner: req.user._id })
            await pattern.save()
            const sound = await SoundCollection.findByIdAndUpdate({ '_id': req.params.id }, { $push: { patterns: { userName: req.user.userName, patternOwner: req.user._id, name: req.body.name, _id: pattern._id } } });
            res.status(200).send(pattern)
            // res.status(200).send(sound)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
// .get('/tags/:name', async (req, res) => {
//     try {
//         const sound = await Sounds.find({ tags: { "$in": [req.params.name] } });
//         res.status(200).send(sound.map(e => { return { id: e._id, name: e.name, tags: e.tags } }))
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// })
// .get('/tags', async (req, res) => {
//     try {
//         const sound = await Sounds.find({});
//         const tags = [];
//         sound.forEach(e => {
//             e.tags.forEach(tag => {
//                 if (!tags.includes(tag)) {
//                     tags.push(tag)
//                 }
//             })
//         })
//         res.status(200).send(tags)
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// })
// .get('/', async (req, res) => {
//     try {
//         const sound = await Sounds.find();
//         res.status(200).send(sound)
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// })




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