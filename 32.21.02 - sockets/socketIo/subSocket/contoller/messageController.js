const Message = require("../model/message");

const saveMssage = (messageText) => {
  return new Promise((resolve, reject) => {
    const message = new Message({ messageText })
      .save()
      .then((message) => resolve(message))
      .catch((err) => reject(err));
  });
};

const getAllMessages = () => {
  return new Promise((resolve, reject) => {
    Message.find()
      .then((messages) => resolve(messages))
      .catch((err) => reject(err));
  });
};

const deleteMessage = (_id) => {
  return new Promise((resolve, reject) => {
    Message.findByIdAndDelete(_id)
      .then((messages) => resolve(messages))
      .catch((err) => reject(err));
  });
};

exports.getAllMessages = getAllMessages;
exports.saveMssage = saveMssage;
exports.deleteMessage = deleteMessage;
