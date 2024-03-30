const { StatusCodes } = require('http-status-codes')
const Product = require('../model/product')

// add product
const createProduct = async (req,res) => {
    try {
        res.json({ msg: "add product"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message})
    }
}

// read all products
const readAllProduct = async (req,res) => {
    try {
        res.json({ msg: "all product"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message})
    }
}

// read single products
const readSingleProduct = async (req,res) => {
    try {
        res.json({ msg: "single product"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message})
    }
}

// update product
const updateProduct = async (req,res) => {
    try {
        res.json({ msg: "Update product"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message})
    }
}

// delete products
const deleteProduct = async (req,res) => {
    try {
        res.json({ msg: "delete product"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message})
    }
}

module.exports = { createProduct, readAllProduct, readSingleProduct, updateProduct, deleteProduct}



