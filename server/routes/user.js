const express = require("express");
const router = express.Router();
const { authCheck, adminCheck } = require("../middlewares/authChech");
const { listUsers } = require("../controllers/user");

router.get("/users", authCheck, adminCheck, listUsers);
router.post("/change-status", changeStatus);
router.post("/change-role");

router.post("/user/cart");
router.get("/user/cart");
router.delete("/user/cart/:id");

router.post("/user/address");

router.post("/user/order");
router.get("/user/order");

module.exports = router;
