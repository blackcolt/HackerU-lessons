const fs = require("fs");
const path = require("path");

const logFile = fs.createWriteStream(
  path.resolve(__dirname, "./fromAttacks.txt")
);

const express = require("express");
const app = express();

app.use(require("morgan")("dev"));
app.use(require("cors")());
app.use(express.json());

app.all("*", (req, res) => {
  logFile.write(new Date().toLocaleTimeString());
  logFile.write(`: ${JSON.stringify(req.body)} \r\n`);

  res.end();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
