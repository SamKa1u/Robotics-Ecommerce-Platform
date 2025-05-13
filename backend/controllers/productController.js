const Product = require('../models/product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('reviews');
    if (!products.length) {
      return res.status(404).json({ message: 'No products found' });
    }
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, image } = req.body;

    // Basic validation for product fields
    if (!name || !price || !description || !category || !image) {
      return res.status(400).json({ message: 'All product fields are required' });
    }

    const product = new Product({
      name,
      price,
      description,
      category,
      image
    });

    await product.save();
    console.log(`Product created: ${name}`);
    res.status(201).json(product);
  } catch (err) {
    console.error('Error creating product:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an existing product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    console.log(`Product updated: ${updatedProduct.name}`);
    res.json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    console.log(`Product deleted: ${product.name}`);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error('Error deleting product:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
