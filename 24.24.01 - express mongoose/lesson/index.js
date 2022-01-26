const express = require("express"),
  mongoose = require("mongoose"),
  port = process.env.PORT || 3000,
  Post = require("./models/post"),
  User = require("./models/user"),
  app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// app.get("/post/:postId", (req, res, next) => {
//   console.log(req.params.postId);
//   Post.findOne({ _id: req.params.postId })
//     .then((post) => {
//       res.json(post);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //added user with model.
// app.post("/add-user", (req, res) => {
//   const { name, tz, phone } = req.body;
//   const user = new User({ name, tz, phone });
//   user
//     .save()
//     .then((user) => res.json(user))
//     .catch((err) => res.json(err));
// });
app.delete("/user", (req, res) => {
  req.query.userId;
});

app.delete("/user/:david", (req, res) => {
  User.findOneAndDelete({ _id: req.params.david })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.json(err));
});

// app.get("/home", (req, res, next) => {
//   const arefUser = new User({ name: "Aref", blabla: "asdasdasd" });
// });
mongoose
  .connect("mongodb://0.0.0.0:27017/test")
  .then(() => {
    app.listen(port, () =>
      console.info(`start server start listening on port ${port}`)
    );
  })
  .catch((err) => console.error(err));
