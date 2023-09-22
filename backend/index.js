const express = require("express");
const bodyParser = require("body-parser");
const db = require("mongoose");
const Product = require("./models/product.model");
const cors = require("cors");

const app = express();
const port = 3000;

db.connect(
  "mongodb+srv://zubaer:88888888@mydatabase.tcfny.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("Database Connected"));
app.use(cors());
app.use(bodyParser.json());

// [POST] /api/products
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

// [GET] /api/products 
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve products." });
  }
});


app.listen(port, () => console.log("server running"));
