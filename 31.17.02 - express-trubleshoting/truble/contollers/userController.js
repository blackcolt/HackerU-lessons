const user = require("../models/user");

const saveUser = () => {
  return new Promise((resolve, reject) => {
    const user = new User();
    user
      .save()
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
};
