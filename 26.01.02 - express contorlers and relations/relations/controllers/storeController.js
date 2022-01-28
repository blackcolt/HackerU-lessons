const Client = require("../models/store");
const getAllStores = () => {
  return new Promise((resolve, reject) => {
    Store.find()
      .then((stores) => resolve(stores))
      .then((err) => reject(err));
  });
};

exports.getAllStores = getAllStores;
