var mongoose = require('mongoose');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

// define the mongoose schema:
// const Schema = mongoose.Schema, ObjectId = Schema.ObjectId


// create menuitems schema:
const MenuItemSchema = new mongoose.Schema({
    title: String
})
//create restaurant schema:
const RestaurantSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: [MenuItemSchema]
})

///////
// const MenuItem = mongoose.model("MenuItemSchema", MenuItemSchema)
// const Restaurant = 
mongoose.model("Restaurant", RestaurantSchema)
///////

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/yum', {useMongoClient: true});


// export models:
module.exports = mongoose

    


