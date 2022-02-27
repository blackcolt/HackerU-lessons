const {
    saveMssage,
    getAllMessages,
    deleteMessage,
  } = require("./contoller/messageController"),
  express = require("express"),
  socketIO = require("socket.io"),
  mongoose = require("mongoose"),
  app = express(),
  port = 3000;

app.use(express.static("public"));
app.get("/messages", (req, res) => {
  getAllMessages()
    .then((messages) => res.json(messages))
    .catch((err) => res.status(500).json(err));
});

mongoose
  .connect("mongodb://0.0.0.0:27017/hacker-chat")
  .then(() => {
    const server = app.listen(port, () => console.info(`port ${port}`));
    const io = socketIO(server);
    io.on("connection", (socket) => {
      socket.on("message-sent", (message) => {
        saveMssage(message.message).then((message) => {
          io.emit("message-recived", message);
        });
      });
      socket.on("delete-message", (id) => {
        deleteMessage(id).then((message) =>
          io.emit("message-deleted", message)
        );
      });
    });
    app.delete("/message/:id", (req, res) => {
      const messageID = req.params.id;
      deleteMessage(messageID).then((message) =>
        io.emit("message-deleted", message)
      );
    });
  })
  .catch((err) => console.error(err));
