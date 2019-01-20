const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.route");
const app = express();

const mongoose = require("mongoose");
let dev_db_url = "mongodb://test:samy081089@ds157834.mlab.com:57834/habbo";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

let port = 3000;

app.listen(port, () => {
  console.log("Server is running on port n°" + port);
});
