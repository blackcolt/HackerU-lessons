const express = require("express"),
  path = require("path"),
  port = 3000;

app = express();

app.use(express.static("public"));

app.listen(port, () =>
  console.info(`start server start listening on port ${port}`)
);
