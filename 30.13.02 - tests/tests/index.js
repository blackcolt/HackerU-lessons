function getCalculatePriceAfterDiscount(price, discountPrecentage) {
  return price - price * discountPrecentage;
}

function getUserById() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        name: "idan",
        phone: "0526651266",
      });
    }, 5000);
  });
}

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve([
        {
          name: "idan",
          phone: "0526651266",
        },
        {
          name: "idan",
          phone: "0526651266",
        },
      ]);
    }, 5000);
  });
}

function getAllUsers() {
  return [];
}

function getAllElemants(elemtns) {
  const { name = "idan", age = "35" } = elemtns;
  return name;
}

exports.getCalculatePriceAfterDiscount = getCalculatePriceAfterDiscount;
exports.getUserById = getUserById;
exports.getUsers = getUsers;
exports.getAllUsers = getAllUsers;
exports.getAllElemants = getAllElemants;
