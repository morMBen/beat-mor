const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express();
require('./db/mongoose');
const route = require('./routers/Index.router')

const pubDir = path.join(__dirname, './build')

app.use(express.static(pubDir));

app.use(cors())
app.use(express.json({ limit: "5mb" }))
app.use('/api', route);
//
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
//
// app.use('/', (req, res) => {
//     res.sendFile(path.join(pubDir, 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('listening to port ' + PORT)
})



// require('./db/mongoose');
// const route = require('./routers/Index.router')

// app.use(express.static(path.join(__dirname, './build')));

// app.use(cors())
// app.use(express.json({ limit: "5mb" }))
// app.use('/api', route);


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log('listening to port ' + PORT)
// })