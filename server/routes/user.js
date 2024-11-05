const express = require("express");
const router = express.Router();
const { authCheck } = require("../middlewares/authChech");
const { getAllUsers } = require("../controllers/user");

router.get("/users", authCheck, getAllUsers);
router.post("/change-status");
router.post("/change-role");

router.post("/user/cart");
router.get("/user/cart");
router.delete("/user/cart/:id");

router.post("/user/address");

router.post("/user/order");
router.get("/user/order");

module.exports = router;
