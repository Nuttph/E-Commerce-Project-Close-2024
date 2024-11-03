const express = require("express");
const router = express.Router();

// @ENDPOINT http://localhost:5000/api/product
router.post("/product");
router.get("/products/:count");
router.delete("/product/:id");
router.post("/productby");
router.post("/search/filters");

module.exports = router;
