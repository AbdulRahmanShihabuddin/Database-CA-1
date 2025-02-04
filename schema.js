const mongoose = require("mongoose")
const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true

    },
    items:{
        type:[Number]
    }
})
const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const items = mongoose.model('items',itemSchema)
const restaurant = mongoose.model('restaurant',restaurantSchema)
module.exports(items)
module.exports(restaurant)