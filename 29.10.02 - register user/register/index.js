const express = require("express"),
  User = require("./models/user"),
  mongoose = require("mongoose"),
  Joi = require("joi"),
  app = express(),
  port = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => res.json({ hello: "world" }));

app.post("/registerUser", (req, res) => {
  //   const user = new User({ name: "idan", password: "magled" });
  //   user.hashPassword();
  //   user.save().then((user) => {
  //     console.log(user);
  //   });

  const user = new User({ name: "idan", password: "magled" });
  const isValid = user.validateUserSchema();
  if (isValid) {
    user.save().then((user) => {});
  } else {
  }
});

app.post("/login", (req, res) => {
  const user = new User({ name: "idan", password: "magled" });
  user.validateUser();
  const dbUser = User.find({ name: user.name, password: user.password }).then(
    (user) => {
      console.log(user);
    }
  );
});

mongoose
  .connect("mongodb://0.0.0.0:27017/register")
  .then(() => {
    app.listen(port, () =>
      console.info(`start server start listening on port ${port}`)
    );
  })
  .catch((err) => console.error(err));
