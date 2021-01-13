//require('./server/config/config')

require('./config/config')

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))

// mongoose.connect(
//     process.env.URLDB,
//     { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },

//     (err, res) => {
//         if (err) throw err;

//         console.log('Base de datos ONLINE');
//     }
// );


mongoose.connect(
    "mongodb+srv://cocoa-user:zeCLBhugnx726afH@cluster0.l2gsu.mongodb.net/bancos?retryWrites=true&w=majority", { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log("Base de datos Online!");
    }
);







app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto: ", process.env.PORT);
});

