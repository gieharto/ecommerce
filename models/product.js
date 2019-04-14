const mongoose = require ('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name : String,
    variant: [{
        name: String,
        images: [String],
        slug: String,
        deskripsi: String,
        price: Number,
        discount: Number,
        Weight: Number,
        quantity: Number,
        soldQuantity: Number,
        wishListCount: Number,
    }],

    rating: Number,
    revies:[{
        userId: String,
        content: String,
        image: String,
        rating: Number,
        timeStamp : Date,
    }]
})

const Product = mongoose.model('product', productSchema)

module.exports = Product