const express = require("express");
const bodyParser = require("body-parser");
const db = require("mongoose");

const app = express();

const port = 3000;

db.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.listen(port, () => console.log("server running"));
