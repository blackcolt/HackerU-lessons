const Order = require("../models/order");
const getAllOrders = () => {
  return new Promise((resolve, reject) => {
    Order.find()
      .then((orders) => resolve(orders))
      .catch((err) => reject(err));
  });
};
