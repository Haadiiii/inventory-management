const express = require("express");
const productRoutes = express.Router();
const Product = require("../model/product"); // Import the Product model
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controller/product");

// Create a new product
productRoutes.post("/", async (req, res) => {
  createProduct(req, res);
});

// Read product details by ID
productRoutes.get("/:id", async (req, res) => {
  getProductById(req, res);
});

// Update product details by ID
productRoutes.patch("/:id", async (req, res) => {
  updateProductById(req, res);
});

// Delete a product by ID
productRoutes.delete("/:id", async (req, res) => {
  deleteProductById(req, res);
});

// List all products, with an optional filter for "Low in Stock" products
productRoutes.get("/", async (req, res) => {
  getAllProducts(req, res);
});

module.exports = productRoutes;
