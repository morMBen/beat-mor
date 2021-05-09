const mongoose = require('mongoose');
const validator = require('validator');


const soundsGroup = new mongoose.Schema({
    sounds: {
        type: Array,
    }
})

const Sounds = mongoose.model('Sounds', soundsGroup)


module.exports = Sounds;