const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node Api Server updated");
});

mongoose
  .connect(
    "mongodb+srv://lukaabutidze99:UKfcpPDsSBeVdltT@backenddb.czam70i.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("Serv is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed");
  });
