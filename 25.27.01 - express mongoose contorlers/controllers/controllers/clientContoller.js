Client = require("../models/client");

const getAllClient = () => {
  return new Promise((resolve, reject) => {
    Client.find()
      .then((clients) => {
        resolve(clients);
      })
      .catch((err) => reject(err));
  });
};

const getAllClientByName = (name) => {
  return new Promise((resolve, reject) => {
    Client.find({ name })
      .then((clients) => {
        resolve(clients);
      })
      .catch((err) => reject(err));
  });
};

const getAllVIPClient = () => {
  return new Promise((resolve, reject) => {
    Client.find({ isVip: true })
      .then((clients) => {
        resolve(clients);
      })
      .catch((err) => reject(err));
  });
};

const longFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};
thisIsAnestedPromiss().then((clients) => {
  
});

const thisIsAnestedPromiss = () => {
  return new Promise((resolve, reject) => {
    Client.find({ isVip: true })
      .then((clients) => {
        resolve(clients);
      })
      .catch((err) => reject(err));
  });
};

const getAllClientsVipPhonesThatPurcheseThisWeek = () => {};

exports.getAllClient = getAllClient;
exports.long = longFunction;
