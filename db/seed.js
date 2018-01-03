const mongoose = require("../db/schema");
// define schema models:
const Restaurant = mongoose.model('Restaurant')


const restaurantSeed = [
    {
        "name": "Panera",
        "address": {
            "street": "123 birch lane",
            "zipcode": 20010
        },
        "yelpUrl": "yelp.com/panera",
        "items": [
            {"title": "broccoli cheddar soup"},
            {"title": "chicken noodle soup"},
            {"title": "grilled cheese"}
        ]
    },
    {
        "name": "Chipotle",
        "address": {
            "street": "567 cedar rd",
            "zipcode": 20011
        },
        "yelpUrl": "yelp.com/chipotle",
        "items": [
            {"title": "Chicken burrito"},
            {"title": "Steak burrito"},
            {"title": "Veggie burrito"}
        ]
    }
]


Restaurant.remove({})
    .then(() => {
        return Restaurant.collection.insert(restaurantSeed)
        })
        .then(_ => process.exit())
    // })

// module.exports = restaurantSeed


// clear DBs( no db used, what is being cleared? ) (add error catch):
// Restaurant.remove({}, (err) => {
//     console.log(err)
// })

// create some restaurants: 
// split restaurants/menuItems?
// const restaurant1 = new Restaurant({
//     "name": "Panera",
//     "address": {
//         "street": "123 birch lane",
//         "zipcode": 20010
//     },
//     "yelpUrl": "yelp.com/panera",
//     "items": [
//         new MenuItem({"title": "broccoli cheddar soup"}),
//         new MenuItem({"title": "chicken noodle soup"}),
//         new MenuItem({"title": "grilled cheese"})
//     ]
// })
// const restaurant2 = new Restaurant({
//     "name": "Chipotle",
//     "address": {
//         "street": "567 cedar rd",
//         "zipcode": 20011
//     },
//     "yelpUrl": "yelp.com/chipotle",
//     "items": [
//         new MenuItem({"title": "Chicken burrito"}),
//         new MenuItem({"title": "Steak burrito"}),
//         new MenuItem({"title": "Veggie burrito"})
//     ]
// })
