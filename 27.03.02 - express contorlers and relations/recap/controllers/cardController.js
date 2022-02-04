const Card = require('../models/card');

const getAllCards = () => {
  return new Promise((resolve, reject) => {
    Card.find()
      .then((cards) => resolve(cards))
      .catch((err) => reject(err));
  });
};

const addCard = (cardNumber, cvv, expDate) => {
  return new Promise((resolve, reject) => {
    const card = new Card({
      cardNumber,
      cvv,
      expDate,
      blabla: 'this will be ignored cus its not in the scheme',
    });
    card
      .save()
      .then((card) => {
        resolve(card);
      })
      .catch((err) => reject(err));
  });
};
const getCard = (_id) => {
  return new Promise((resolve, reject) => {
    Card.findOne({ _id })
      .then((card) => resolve(card))
      .catch((err) => reject(err));
  });
};

module.exports = {
  getCard,
  addCard,
  getAllCards,
};
