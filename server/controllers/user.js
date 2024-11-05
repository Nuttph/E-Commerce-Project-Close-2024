exports.getAllUsers = async (req, res) => {
  try {
    res.send("Hello Users");
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
