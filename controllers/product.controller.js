const Product = require("../models/product.model");

exports.test = function(req, res) {
  res.send("Greetings from the Test controller ! ");
};

exports.product_create = function(req, res) {
  console.log(req.body);
  let product = new Product({
    name: req.body.name,
    price: req.body.price
  });
  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

exports.product_detail = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) {
      return next(err);
    }
    res.send(product);
  });
};

exports.product_update = function(req, res) {
  Product.findOneAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) {
      return next(err);
    }
    res.send("Product updated");
  });
};

exports.product_delete = function(req, res) {
  Product.findOneAndDelete(req.params.id, function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product deleted successfully =)");
  });
};
