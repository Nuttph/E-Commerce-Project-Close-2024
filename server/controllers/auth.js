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

    //check email in database already ?

    console.log(email);
    console.log(password);
    res.send("Hello Register");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.login = async (req, res) => {
  try {
    res.send("Hello Login");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.currentUser = async (req, res) => {
  try {
    res.send("Hello cureentUser");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.currentAdmin = async (req, res) => {
  try {
    res.send("Hello cureentAdmin");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
