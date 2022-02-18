const user = require("./models/user");

const express = require("express"),
  mongoose = require("mongoose"),
  { saveUser } = require("./contollers/userController"),
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger);

function logger(req, res, next) {

  User.find({'password': req.headers.username}).
  if (req.headers.username === "idan" && req.headers.password == "12345") {
    next();
  }
  res.status(401).json({ message: "You are not weclome here" });
}

app.get("/middle", logger, logger, logger,  (req, res, next) => {
  res.json({ hello: "world" });
});

app.post("/api/users", (req, res) => {
  const { userName } = req.body;
  saveUser(userName)
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json(error));
});
mongoose
  .connect("mongodb://0.0.0.0:27017/trubles")
  .then(() =>
    app.listen(3000, () =>
      console.info(`start server start listening on port ${3000}`)
    )
  )
  .catch((err) => console.error(err));

function idan(i, t) {}

idan(1, 3, 4);
