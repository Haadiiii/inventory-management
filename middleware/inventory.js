const Product = require("../model/product"); // Import the Product model

const inventoryManagement = async (req, res, next) => {
  try {
    // Check if the route parameter :id is present
    if (req.params.id) {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      if (product.quantity <= 10) {
        product.isLowInStock = true;
        await product.save();
      } else {
        product.isLowInStock = false;
        await product.save();
      }

      if (product.quantity === 0) {
        console.log(
          `Product ${product.name} is out of stock. Notify restock team.`
        );
      }
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = inventoryManagement;
