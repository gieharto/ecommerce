const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get ('', (req, res) => {
    res.send('Halaman Produk')
})

// new Product({
//     name: 'Contoh Product'
// }).save().then(() => {
//     console.log('Data Berhasil diinput')
// })

module.exports = router