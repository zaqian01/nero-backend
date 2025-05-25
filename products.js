// routes/products.js
const express = require('express');
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Nero Origin Beans (Green Bean)",
    price: 55000,
    description: "Biji kopi mentah kualitas ekspor dari Dataran Tinggi Gayo. Cocok untuk home roaster dan profesional.",
    weight: "250g"
  },
  {
    id: 2,
    name: "Nero Signature Beans (Roasted)",
    price: 65000,
    description: "100% Arabika Gayo sangrai medium-dark. Rasa bold, cokelat, sedikit rempah. Ideal untuk espresso & tubruk.",
    weight: "250g"
  },
  {
    id: 3,
    name: "Nero Grind Gayo (Bubuk Kopi)",
    price: 68000,
    description: "Giling segar sesuai kebutuhan: fine (Turkish), medium (V60), atau kasar (French Press). Rasa kompleks & seimbang.",
    weight: "250g"
  },
  {
    id: 4,
    name: "Nero Wine Series",
    price: 85000,
    description: "Kopi fermentasi natural dengan karakter rasa mirip wine: fruity, kompleks, dan eksklusif. Batch terbatas.",
    weight: "200g"
  }
];

// Route GET /products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
