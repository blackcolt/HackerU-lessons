const Client = require("../models/client");
const getAllClients = () => {
  return new Promise((resolve, reject) => {
    Client.find()
      .then((client) => resolve(client))
      .then((err) => reject(err));
  });
};

exports.getAllClients = getAllClients;
