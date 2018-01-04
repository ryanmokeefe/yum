const Restaurant = require("./db/schema.js");
    const express = require('express')
    const app = express()
    const parser = require('body-parser')
    const methodOverride = require('method-override')
    const hbs = require('express-handlebars')
const router = express.Router()
    const controller = require('./controllers/restaurants')

app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

// set port:
app.set("port", process.env.port || 4000)
// configure express to use handlebars:
app.set("view engine", "hbs")

app.engine('.hbs', hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
}))

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/restaurants', controller)

app.listen(app.get('port'), () => {
    console.log('listening on port 4000')
})



////////////////////

// // function to create new restaurants: 
// function createRestaurant(name, street, zipcode, yelp) {
//     Restaurant.create({
//         name: name, "address.street": street, "address.zipcode": zipcode, yelpUrl: yelp
//     },
//     function (err, docs) {
//         if (err) {
//             return handleError(err)
//         } else {
//             console.log(restaurant.name + ", " + restaurant.address.zipcode)
//         }
//         successRedirect : '/';
//         failureRedirect : '/login'
//     })
// }
// //////////////////


// // function to find restaurant by NAME: 
// function findName(restaurant) {
//     Restaurant.findOne({name: restaurant}, function(err, result) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(result)
//         }
//     })
// }

// // function to find restaurant by ZIP:
// function findZip(zip) {
//     results = []
//     // find all ({}) and loop to find all with matching zipcode: 
//     Restaurant.find({}, function(err, docs){
//         docs.forEach(function(restaurant){
//             if (restaurant.address.zipcode === zip){
//                 results.push(restaurant)
//             } 
//         })
//         console.log(results)
//     })
// }

// //function to update restaurant name:
// // ** docs?
// function updateRestaurant(restaurant, newName) {
//     Restaurant.findOneAndUpdate({name: restaurant}, {name: newName}, {new: true}, function(err, docs) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(docs)
//         }
//     })
// }

// // function to delete restaurant: 
// function deleteRestaurant(restaurant) {
//     Restaurant.findOneAndRemove({name: restaurant}, function(err, docs){
//         if (err){
//             console.log(err)
//         } else {
//             console.log(docs + " has been removed")
//         }
//     })
// }


// //// Methods to add/remove embedded menuItems:

// // add items to menu:
// function addItem(restaurant, item) {
//     Restaurant.findOne({name: restaurant}, function(err, docs) {
//         docs.items.push(new MenuItem({title: item}))
//         docs.save(function(err, results) {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log(results)
//             }
//         })
//     })
// }

// // remove items from menu: 
// function deleteItem(restaurant, item){
//     // * use findOneAndUpdate, not findOneAndRemove: 
//     // * using findOneAndRemove will remove the Restaurant
//     Restaurant.findOneAndUpdate({name: restaurant}, {
//         // $pull operator removes from an array all instances of a value(s) that match a specified condition.
//         $pull: {items: {title: item}}
//     }, {new: true}, function(err, docs) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(docs)
//         }
//     }
//     )
// }
