const express = require("express");
const bodyParser = require("body-parser");
const db = require("mongoose");
const Product = require("./models/product.model");

const app = express();
const port = 3000;

db.connect("mongodb://mongodb:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.post("/api/products", async (req, res) => {
  try {
    const productData = req.body;
    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save the product." });
  }
});

app.listen(port, () => console.log("server running"));
