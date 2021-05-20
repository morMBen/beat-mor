const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const pattern = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pattern: {
        type: Object
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
})

pattern.plugin(uniqueValidator);
const Patterns = mongoose.model('Patterns', pattern)

module.exports = Patterns;