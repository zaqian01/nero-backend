// routes/orders.js
const express = require('express');
const router = express.Router();

// Simulasi database sementara
let orders = [];

// GET all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// POST new order
router.post('/', (req, res) => {
  const order = req.body;
  order.id = Date.now();
  orders.push(order);
  res.status(201).json(order);
});

// DELETE order by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  orders = orders.filter(o => o.id !== id);
  res.json({ message: 'Order deleted' });
});

module.exports = router;
