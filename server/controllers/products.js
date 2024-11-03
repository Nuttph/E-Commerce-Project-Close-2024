const { prisma } = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { title, description, price, quantity, categoryId, images } =
      req.body;
    const product = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
      },
    });
    res.send("Hello Create Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.list = async (req, res) => {
  try {
    const { count } = req.param;
    res.send("Hello List Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.update = async (req, res) => {
  try {
    const { id } = req.param;
    res.send("Hello Update Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.remove = async (req, res) => {
  try {
    res.send("Hello Remove Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.listby = async (req, res) => {
  try {
    res.send("Hello Listby Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.searchFilters = async (req, res) => {
  try {
    res.send("Hello SearchFilters Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
