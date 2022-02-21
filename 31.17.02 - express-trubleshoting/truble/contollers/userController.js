const User = require("../models/user");

const saveUser = (name) => {
  return new Promise((resolve, reject) => {
    const user = new User({ name });
    user
      .save()
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
};

exports.saveUser = saveUser;
