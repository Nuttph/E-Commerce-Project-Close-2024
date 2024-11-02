exports.create = (req, res) => {
  try {
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.list = (req, res) => {
  try {
    res.send("hello category list");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.remove = (req, res) => {
  try {
    const { id } = req.params;
    res.send("hello category remove " + id);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
