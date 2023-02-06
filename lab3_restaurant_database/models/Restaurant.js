const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({

    address: {
        building: {
            type: Number,
        },
        street: {
            type: String,
            trim: true,
            lowercase: true
        },
        zipcode: {
            type: String,
            trim: true,
            lowercase: true
        }
    },
    city: {
        type: String,
        required: [true, 'Enter City Name'],
        trim: true,
        lowercase: true
    },
    cuisine: {
        type: String,
        required: [true, 'Enter Cuisine Name'],
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        required: [true, 'Enter Restaurant Name'],
        trim: true,
        lowercase: true
    },
    restaurant_id: {
        type: Number,
        required: [true, 'Enter Restaurant ID'],
        trim: true,
        lowercase: true
    },
})

// Custom Schema Methods - Instance Method Declaration
RestaurantSchema.methods.getCuisine = function () {
    console.log(`Restaurant cuisine : ${this.cuisine}`)
    return `${this.cuisine}`
}

// Custom Schema Methods - Instance Method Declaration
RestaurantSchema.statics.getRestaurantByCuisine = function (value) {
    return this.find({ cuisine: value })
}

// Query Helpers
RestaurantSchema.query.byCuisine = function (cuisine) {
    return this.where({ cuisine: cuisine, })
}

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
module.exports = Restaurant