const express = require("express"),
  mongoose = require("mongoose"),
  movieRouter = require("./routes/movies"),
  app = express(),
  port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.use("/movies", movieRouter);

// app.post("/movies", (req, res) => {
//   return res.json({ hello: "world" });
// });
mongoose
  .connect(123121233)
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
