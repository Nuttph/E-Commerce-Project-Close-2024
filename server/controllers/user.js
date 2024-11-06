const { prisma } = require("../config/prisma");

exports.listUsers = async (req, res) => {
  try {
    res.send("Hello Users");
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.changeStatus = async (req, res) => {
  try {
    const { id, enabled } = req.body;
    console.log(id);
    console.log(enabled);

    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        enabled: enabled,
      },
    });
    console.log(user);
    res.send("Hello changeStatus");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.changeRole = async (req, res) => {
  try {
    const { id, role } = req.body;
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        role: role,
      },
    });
    console.log(user);
    res.send("Change role success ");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.userCart = async (req, res) => {
  try {
    const { cart } = req.body;
    console.log(cart);
    res.send("Hello userCart");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.getUserCart = async (req, res) => {
  try {
    res.send("Hello getUserCart");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.emptyCart = async (req, res) => {
  try {
    res.send("Hello emptyCart");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.saveAddress = async (req, res) => {
  try {
    res.send("Hello saveAddress");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.saveOrder = async (req, res) => {
  try {
    res.send("Hello saveOrder");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getOrder = async (req, res) => {
  try {
    res.send("Hello getOrder");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
