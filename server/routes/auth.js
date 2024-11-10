const express = require("express");
const router = express.Router();
//import controller
const {
  register,
  login,
  currentUser,
  currentAdmin,
} = require("../controllers/auth");

//import middle ware
const { adminCheck, authCheck } = require("../middlewares/authChech");
router.post("/register", register);
router.post("/login", login);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
