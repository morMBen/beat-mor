const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');



const patterns = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    patternOwner: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    }
})

const soundCollection = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    sounds: {
        type: [Object]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    patterns: {
        type: [patterns],
        required: false,
        default: []
    }

})

soundCollection.plugin(uniqueValidator);
const SoundCollection = mongoose.model('SoundCollection', soundCollection)

module.exports = SoundCollection;