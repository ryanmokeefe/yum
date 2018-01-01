var Schema = require("../db/schema.js");
// define schema models:
const Restaurant = Schema.Restaurant
const MenuItem = Schema.MenuItem


// clear DBs( no db used, what is being cleared? ) (add error catch):
Restaurant.remove({}, (err) => {
    console.log(err)
})

MenuItem.remove({}, (err) => {
    console.log(err)
})

// create some restaurants: 
// split restaurants/menuItems?
const restaurant1 = new Restaurant({
    "name": "Panera",
    "address": {
        "street": "123 birch lane",
        "zipcode": 20010
    },
    "yelpUrl": "yelp.com/panera",
    "items": [
        new MenuItem({"title": "broccoli cheddar soup"}),
        new MenuItem({"title": "chicken noodle soup"}),
        new MenuItem({"title": "grilled cheese"})
    ]
})
const restaurant2 = new Restaurant({
    "name": "Chipotle",
    "address": {
        "street": "567 cedar rd",
        "zipcode": 20011
    },
    "yelpUrl": "yelp.com/chipotle",
    "items": [
        new MenuItem({"title": "Chicken burrito"}),
        new MenuItem({"title": "Steak burrito"}),
        new MenuItem({"title": "Veggie burrito"})
    ]
})
