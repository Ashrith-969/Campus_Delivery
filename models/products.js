const mongoose = require("mongoose") ;

const productSchema = new mongoose.Schema({
    id : String ,
    name : String ,
    price :  Number ,
    image : String ,
    description : String
})

const Product = new mongoose.model("Product",productSchema) ;

module.exports = Product ;