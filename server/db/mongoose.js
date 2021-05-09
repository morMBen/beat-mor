const mongoose = require('mongoose');
require('dotenv').config()

const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASSWORD
//↓↓↓↓↓↓ Get address from meir and insert ↓↓↓↓↓↓
mongoose.connect('mongodb://127.0.0.1:27017/beat-mor',
    // mongoose.connect(`mongodb://${user}:${pass}@18.197.28.167:27017/`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

