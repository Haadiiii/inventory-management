const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  supplier: String,
  quantity: Number,
  isLowInStock: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
