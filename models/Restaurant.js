const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    cuisine: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
