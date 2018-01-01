var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// create menuitems schema:
const MenuItemSchema = new mongoose.Schema({
    title: String
})
//create restaurant schema:
const RestaurantSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        zipcode: number
    },
    yelpUrl: String,
    items: [MenuItemSchema]
})
// define models from schemas:
const MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema)
const RestaurantModel = mongoose.model("RestaurantSchema", RestaurantSchema)

// export models:
module.exports = {
    Restaurant: RestaurantModel,
    MenuItem: MenuItemModel
}
