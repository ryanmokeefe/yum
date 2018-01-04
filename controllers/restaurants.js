const monggose = require('mongoose')
const express = require('express')
const Restaurant = require('../db/schema')
// const Restaurant = mongoose.model('Restaurant')
const Router = express.Router()
const app = express()


//////////////////

Router.get('/', (req, res) => {
    Restaurant.find({})
    .then((restaurant) => {
        res.render('index', {
            restaurants: restaurant
        })
    })
    .catch((err) => {
        console.log(err)
    })
})





/////////////

module.exports = Router
