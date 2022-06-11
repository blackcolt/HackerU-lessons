const express = require("express"),
  router = express.Router();
router.get("/", (req, res) =>
  res.status(201).json({ message: "Hello World!" })
);
router.get("/blabla", (req, res) =>
  res.status(201).json({ message: "Hello blabla!" })
);
module.exports = router;
