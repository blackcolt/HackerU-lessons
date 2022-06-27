const {
  saveMovie,
  getMovie
} = require("./../controllers/moviesController"),
  axios = require("axios").default,
  express = require("express"),
  router = express.Router();

router.post("/", (req, res) => {
  const {
    movieCast: cast = [],
    movieCountry: country = "Isreal",
    movieDate: date = "1986-01-18",
    movieName: name = "Unknown",
  } = req.body;
  saveMovie(name, date, country, cast)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => res.json(err));
});
router.post("/:movieId", (req, res) => {});
router.get("/:movieId", (req, res) => {
  getMovie(req.params.movieId).then((movie) => {
    const promissImdb = axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_12345678/${req.body.name}`, {
        timeout: 5000,
      }
    );
    const promissRotten = axios.get(
      `https://imdb-api.com/en/API/Search/k_zu9but3y/${movie.name}`, {
        timeout: 5000,
      }
    );
    Promise.all([promissRotten, promissImdb]).then((data) => {
      console.log(data);
    });
  });
});

module.exports = router;