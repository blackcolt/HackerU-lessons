const express = require("express"),
  path = require("path"),
  app = express(),
  port = 3000;

app.use("/api", require("./routes/api"));

app.use(express.static("client/build"));

app.get("*", (_, res) =>
  res.sendFile(path.resolve("client", "build", "index.html"))
);

app.listen(port, () =>
  console.info(`start server start listening on port ${port}`)
);
