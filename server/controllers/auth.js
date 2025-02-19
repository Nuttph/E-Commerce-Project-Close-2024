//import prisma
const { prisma } = require("../config/prisma");
const bcrypt = require("bcryptjs"); //hash
const jwt = require("jsonwebtoken"); //token

exports.register = async (req, res) => {
  //code for routs eiei
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required!!!" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required!!!" });
    }

    // console.log("prisma = " + prisma);
    //check email in database already ?
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({ message: "Email already exits!!" });
    }

    const hashPassword = await bcrypt.hash(password, 10); //10 คือเกลือที่เอาไว้มั่วพาสเวิด
    console.log(hashPassword);

    await prisma.user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    });

    res.send("register success");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error", err: err });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Step 1 Check Email
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user || !user.enabled) {
      return res.status(400).json({ message: "User Not found or not Enabled" });
    }
    //Step 2 Check Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password Invalid!!!" });
    }
    //Step 3 Create Payload
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    console.log(payload);

    //Step 4 Generate Token
    jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) {
        return res.status(500).json({ message: "Server Error", error: err });
      }
      res.json({ payload, token });
    });

    console.log(email, password);
    // res.send("Hello Login");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.currentUser = async (req, res) => {
  try {
    const users = await prisma.user.findFirst({
      where: {
        email: req.user.email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });
    res.json({ users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
// exports.currentAdmin = async (req, res) => {
//   try {
//     res.send("Hello cureentAdmin");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };
