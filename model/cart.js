const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: User
    },
    products: {
        type: Array,
        default: []
    } 
},{
    collection: "cart",
    timestamps: true
})

module.exports = mongoose.model("Cart", cartSchema)