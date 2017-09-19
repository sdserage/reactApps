var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var port = 3001

var ctrl = require('./controller.js')
var config = require('./../.config.js')

const app = express()
app.use(bodyParser.json())

app.use(cors())


app.get('/api/stuff', ctrl.getStuff)


app.listen(port,()=>{
    console.log(`Welcome to port ${port}`)
})

