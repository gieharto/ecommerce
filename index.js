const express = require ('express')
const mongoose = require ('mongoose')
const productRoutes = require('./routes/product')
const app = express()

mongoose.connect (
    'mongodb+srv://root:1234@cluster0-ym4q9.mongodb.net/e-commerce',
    {useNewUrlParser: true},
    ()=>{
        console.log('terhubung ke mongoDB')
    }
)

app.use('/products', productRoutes)

app.listen (8000)   