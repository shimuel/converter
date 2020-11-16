
//node app/server.js

const express = require("express");
const converter = require("./converter");
const cors = require('cors');
const port = process.env.PORT || 3001

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

async function initSvc() {
    console.log('Initialising...')
}

async function start() {

    initSvc()

    app.get("/rgbToHex", function(req, res) {
        var red   = parseInt(req.query.red, 10)
        var green = parseInt(req.query.green, 10)
        var blue  = parseInt(req.query.blue, 10)
        var hex = converter.rgbToHex(red, green, blue)
        res.send(hex);
    });

    app.get("/hexToRgb", function(req, res) {
        var hex = req.query.hex;
        var rgb = converter.hexToRgb(hex);
        res.send(JSON.stringify(rgb));
    });

    app.listen(port, () => {
        console.log(`App listening on http://localhost:${port}`)
    })
}

start()

//app.listen(port);