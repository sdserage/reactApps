var config = require('./../.config.js')

var stuff = ["This is stuff"]



module.exports={
    getStuff: (req,res,next)=>{
        res.status(200).send(config.apiKey)
    }
}