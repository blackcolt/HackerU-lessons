const app = require("express")(),
  mongoose = require("mongoose"),
  { saveUser } = require("./contollers/userController");

app.use(express.static("public"));
app.get("/api/users", (req, res) => {
  const user = req.body;
  saveUser()
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});
mongoose
  .connect("mongodb://0.0.0.0:27017")
  .then(() =>
    app.listen(3000, () =>
      console.info(`start server start listening on port ${3000}`)
    )
  )
  .catch((err) => console.error(err));
