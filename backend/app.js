const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require("cors")
require('dotenv/config')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("working")
})

const subscription = require('./Routes/subscription')
app.use('/api/v1/subscription', subscription)


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response=>{
        console.log("connected")
    })
    .catch(err=>{
        console.error(err)
    })

module.exports = app;