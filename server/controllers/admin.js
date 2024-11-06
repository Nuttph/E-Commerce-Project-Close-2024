const { prisma } = require("../config/prisma");

exports.changeOrderStatus = async (req, res) => {
  try {
    const { orderId, orderStatus } = req.body;
    const orderUpdate = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        orderStatus: orderStatus,
      },
    });

    res.send(orderUpdate);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
exports.changeOrderAdmin = async (req, res) => {
  try {
    res.send("getorder");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
