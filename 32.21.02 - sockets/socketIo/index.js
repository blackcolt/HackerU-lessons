const express = require("express"),
  app = express(),
  port = 3000;

app.use(express.static("public"));
//whats changed here??
const server = app.listen(port, () => console.info(`listening port ${port}`));
io = require("socket.io")(server);
io.on("connection", function (socket) {
  //2
  console.log("A user connected");
  socket.on("add to do", (toDo) => {
    //4
    io.emit("to do added", toDo); // 5
  });
});
