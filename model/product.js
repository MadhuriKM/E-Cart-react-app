const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        image: {
            type: Object,
            default: {
                path: "https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
            }
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
            type: String,
            required: true
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