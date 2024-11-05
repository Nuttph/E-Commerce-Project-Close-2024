const jwt = require("jsonwebtoken");
const { prisma } = require("../config/prisma");

exports.authCheck = async (req, res, next) => {
  try {
    const headerToken = req.headers.authorization;
    console.log(headerToken);
    if (!headerToken) {
      return res.status(401).json({ message: "No Token, Authorization" });
    }
    const token = headerToken.split(" ")[1];

    const decode = jwt.verify(token, process.env.SECRET);
    req.user = decode; //เพิ่ม key ใน object นั่นๆ ถ้าไม่มีก็เพิ่มเข้าไป

    const user = await prisma.user.findFirst({
      where: {
        email: req.user.email,
      },
    });
    if (!user.enabled) {
      return res.status(400).json({ message: "This account can't access" });
    }
    console.log("Hello middleware");
    console.log(req.user);
    console.log("Hello middleware");
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Token Invalid" });
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    const { email, password } = req.user;
    console.log("admin check : ", email);
    const adminUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log("admin check : ", adminUser);
    if (!adminUser || adminUser.role !== "admin") {
      return res.status(403).json({ message: "Acess Denied: Admin Only" });
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
