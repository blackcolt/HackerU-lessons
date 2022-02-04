const {
    getAllClients,
    getClient,
    updateClient,
  } = require("./controllers/clientController"),
  { getAllStores } = require("./controllers/storeController"),
  { saveNewOrder, getAllOrders } = require("./controllers/ordersControlle"),
  mongoose = require("mongoose"),
  express = require("express"),
  app = express(),
  port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/orders", (req, res) => {
  getAllOrders()
    .then((orders) => res.json({ orders }))
    .catch((err) => res.json(err));
});

app.get("/client/:clientId", (req, res) => {
  getClient(req.params.clientId)
    .then((client) => res.json(client))
    .catch((err) => res.json(err));
});

app.put("/client/:clientId", (req, res) => {
  updateClient(req.params.clientId, req.body)
    .then((client) => res.json({ client }))
    .catch((err) => res.json(err));
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

app.post("/order", (req, res) => {
  saveNewOrder(req.body.clientId, req.body.storeId, req.body.orderText)
    .then((order) => res.json(order))
    .catch((err) => res.json({ error: err }));
});

mongoose
  .connect("mongodb://0.0.0.0:27017/ten-wolt")
  .then(() => {
    app.listen(port, () =>
      console.info(`start server start listening on port ${port}`)
    );
  })
  .catch((err) => console.error(err));
