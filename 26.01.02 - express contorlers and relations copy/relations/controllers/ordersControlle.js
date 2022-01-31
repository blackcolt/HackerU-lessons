const Order = require("../models/order");
const getAllOrders = () => {
  return new Promise((resolve, reject) => {
    Order.find()
      .populate("client", "store")
      .then((orders) => resolve(orders))
      .catch((err) => reject(err));
  });
};

const saveNewOrder = (client = "", store = "", orderText = "") => {
  return new Promise((resolve, reject) => {
    const order = new Order({ client, store, orderText });
    order.save((err, order) => (err ? reject(err) : resolve(order)));
  });
};

exports.saveNewOrder = saveNewOrder;
exports.getAllOrders = getAllOrders;
