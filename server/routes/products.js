const express = require("express");
const router = express.Router();
const {
  create,
  list,
  listby,
  remove,
  searchFilters,
} = require("../controllers/products");

// @ENDPOINT http://localhost:5000/api/product
router.post("/product", create);
router.get("/products/:count", list);
router.delete("/product/:id", remove);
router.post("/productby", listby);
router.post("/search/filters", searchFilters);

module.exports = router;
