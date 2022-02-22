const { saveMssage, getAllMessages } = require("./contoller/messageController"),
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
    });
  })
  .catch((err) => console.error(err));
