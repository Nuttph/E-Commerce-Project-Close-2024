exports.create = async (req, res) => {
  try {
    res.send("Hello Create Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.list = async (req, res) => {
  try {
    const { param } = req.param;
    res.send("Hello List Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.remove = async (req, res) => {
  try {
    res.send("Hello Remove Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.listby = async (req, res) => {
  try {
    res.send("Hello Listby Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
exports.searchFilters = async (req, res) => {
  try {
    res.send("Hello SearchFilters Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
