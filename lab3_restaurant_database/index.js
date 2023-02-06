const express = require('express')
const mongoose = require('mongoose')
const restaurantRouter = require('./routes/RestaurantRoutes.js')

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv:///Omar:NewPasscode1@restaurants.belg1b3.mongodb.net/restaurants?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(restaurantRouter)

app.listen(3000, () => { console.log('***Server is running***') })