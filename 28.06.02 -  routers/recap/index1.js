const express = require('express'),
  Card = require('./models/card'),
  mongoose = require('mongoose'),
  { getAllCards, addCard, getCard } = require('./controllers/cardController'),
  app = express(),
  port = 4000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

app.get('/downloadJson', (req, res) => {
  // res.download("public/cards.json");
  // res.redirect("/getCard", 301);
});

app.get('/getCard', (req, res) => {
  getCard()
    .then((card) => res.json(card))
    .catch((err) => res.json(err));
});

app.get('/cards', (req, res) => {
  getAllCards()
    .then((cards) => res.json(cards))
    .catch((err) => res.json(err));
});

app.post('/cards', (req, res) => {
  console.log(req.body);
  const { cardNumber, cvv, expDate } = req.body;
  addCard(cardNumber, cvv, expDate)
    .then((card) => res.json(card))
    .catch((err) => res.json());
});

mongoose
  .connect('mongodb://0.0.0.0:27017')
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
