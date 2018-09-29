var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yum', {useMongoClient: true})
.then(() => {
    console.log('connection to db established')
})
.catch((err) => {
    console.log('connection failed')
})

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
mongoose.model("MenuItem", MenuItemSchema)
mongoose.model("Restaurant", RestaurantSchema)
///////

mongoose.Promise = Promise

// export models:
module.exports = mongoose

    


