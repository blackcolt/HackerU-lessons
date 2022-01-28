const app = require("express")(),
  mongoose = require("mongoose"),
  {
    getAllClient,
    getAllClientByName,
    long,
  } = require("./controllers/clientContoller"),
  Order = require("./model/order"),
  StoreController = require("./controllers/storeContoller"),
  port = 3000;

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
mongoose
  .connect("mongodb://0.0.0.0:27017")
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));

app.get("/clients", (req, res, next) => {
  getAllClient().then((clients) => {
    res.json(clients);
  });
});

app.get("/long", (req, res, next) => {
  console.time("idan");
  console.time("check long process");
  long()
    .then(() => {
      console.timeEnd("idan");
      console.timeEnd("check long process");
    })
    .catch((err) => {});
});

app.post("/long", (req, res, next) => {
  const order = new Order({client: req.query.clientid})
})
