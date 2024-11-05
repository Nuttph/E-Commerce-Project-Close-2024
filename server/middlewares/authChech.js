const jwt = require("jsonwebtoken");

exports.authCheck = (req, res, next) => {
  try {
    const headerToken = req.headers.authorization;
    console.log(headerToken);
    if (!headerToken) {
      return res.status(401).json({ message: "No Token, Authorization" });
    }
    const token = headerToken.split(" ")[1];

    const decode = jwt.verify(token, process.env.SECRET);

    console.log(decode);
    console.log("Hello middleware");
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Token Invalid" });
  }
};
