const express = require("express");
const bodyParser = require("body-parser");
const db = require("mongoose");
const Product = require("./models/product.model");
const cors = require("cors");
const figlet = require("figlet");
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-creds.json");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

db.connect(
  "mongodb+srv://zubaer:88888888@mydatabase.tcfny.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  figlet("Database Connected", (err, data) => {
    if (err) {
      console.log("Error displaying text:", err);
      return;
    }
    console.log(data);
  });
});

// [POST] authentication
app.post("/api/authenticate", async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    res.status(200).json({ success: true, uid });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ success: false, error: "Authentication failed" });
  }
});

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

app.listen(port, () => {
  figlet("Server Running", (err, data) => {
    if (err) {
      console.log("Error displaying text:", err);
      return;
    }
    console.log(data);
  });
});
