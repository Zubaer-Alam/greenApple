const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    "product-id": String,
    name: String,
    variations: [
      {
        variation: Number,
        size: String,
        qty: Number,
        price: Number,
      },
    ],
  });
  
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
  