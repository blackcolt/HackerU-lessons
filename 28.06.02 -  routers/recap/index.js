const app = require('express')(),
  mongoose = require('mongoose'),
  axios = require('axios').default,
  port = 3000;

app.get('/idan', (req, res, next) => {
  axios.get('http://localhost:4000/cards').then((response) => {
    res.json(response.data);
  });
});

// app.get("/", (req, res, next) => {
//   console.log("IM HEREEEE");
//   next();
// });

// app.get("/", (req, res) => {
//   console.log("IM THEREEE");
//   res.json({ hello: "hello" });
// });

mongoose
  .connect('mongodb://0.0.0.0:27017')
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
