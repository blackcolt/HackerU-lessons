const express = require("express"),
  app = express(),
  port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
//whats changed here??
const server = app.listen(port, () => console.info(`listening port ${port}`));
