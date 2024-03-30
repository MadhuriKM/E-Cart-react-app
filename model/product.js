const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        image: {
            type: String,
            trim: true,
            required: true
        },
        desc: {
            type: String,
            trim: true,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        SKU: {   // stock keeping unit
            type: Array,
            default: []
        },
        category: {
            type: String,
            trim: true,
            required: true
        },
        discount: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },{
        collection: "products",
        timestamps: true
    })

    module.exports = mongoose.model("Product",ProductSchema)