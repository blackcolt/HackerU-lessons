const Store = require("../models/store");
const getAllStores = () => {
  return new Promise((resolve, reject) => {
    Store.find()
      .then((stores) => resolve(stores))
      .catch((err) => reject(err));
  });
};

exports.getAllStores = getAllStores;
