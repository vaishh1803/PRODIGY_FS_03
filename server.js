const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

let products = [
    { id: 1, name: "Product 1", description: "Description of Product 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Product 2", description: "Description of Product 2", price: 20, image: "product2.jpg" }
];

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Simple POST endpoint for placing an order (for example)
app.post('/api/orders', (req, res) => {
    const { orderDetails } = req.body;
    // Here you would normally save the order to a database
    console.log('Order received:', orderDetails);
    res.status(201).send({ message: "Order placed successfully" });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
