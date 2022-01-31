const Client = require("../models/client");
const getAllClients = () => {
  return new Promise((resolve, reject) => {
    Client.find()
      .then((client) => resolve(client))
      .catch((err) => reject(err));
  });
};

const getClient = (_id) => {
  return new Promise((resolve, reject) => {
    Client.findOne({ _id })
      .then((client) => resolve(client))
      .catch((err) => reject(err));
  });
};

const updateClient = (_id, updateClient) => {
  return new Promise((resolve, reject) => {
    Client.findByIdAndUpdate(_id, updateClient)
      .then((client) => resolve(client))
      .catch((err) => reject(err));
  });
};

exports.getAllClients = getAllClients;
exports.getClient = getClient;
exports.updateClient = updateClient;
