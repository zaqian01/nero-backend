const express = require('express');
const cors = require('cors');
const ordersRouter = require('./routes/orders');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Izinkan request dari frontend (CORS)
app.use(express.json()); // Parsing JSON body

// Routes
app.use('/api/orders', ordersRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Nero Kopi Backend API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
app.delete('/api/orders', (req, res) => {
  const { index } = req.body;
  if (typeof index === 'number' && orders[index]) {
    orders.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Invalid index' });
  }
});
