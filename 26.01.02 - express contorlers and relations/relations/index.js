const { getAllClients } = require("./controllers/clientController"),
  { getAllStores } = require("./controllers/storeController"),
  orderContoller = require("./controllers/ordersControlle"),
  mongoose = require("mongoose"),
  express = require("express"),
  app = express(),
  port = 3000;

app.use(express.static("public"));

app.get("/orders", (req, res) => {
  return res.json({ hello: "world" });
});

app.get("/getAllClients", (req, res) => {
  getAllClients()
    .then((clients) => res.json({ clients }))
    .catch((err) => res.json(err));
});

app.get("/getAllStores", (req, res) => {
  getAllStores()
    .then((stores) => res.json({ stores }))
    .catch((err) => res.json(err));
});

mongoose
  .connect("mongodb://0.0.0.0:27017/ten-wolt")
  .then(() => {
    app.listen(port, () =>
      console.info(`start server start listening on port ${port}`)
    );
  })
  .catch((err) => console.error(err));
