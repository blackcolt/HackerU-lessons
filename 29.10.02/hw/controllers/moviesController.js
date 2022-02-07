const Movie = require("../models/movie");

exports.saveMovie = (name, date, country, cast) => {
  return new Promise((resolve, reject) => {
    new Movie({ name, date, country, cast })
      .save()
      .then((movie) => resolve(movie))
      .catch((err) => reject(err));
  });
};
exports.getMovie = (_id) => {
  return new Promise((resolve, reject) => {
    Movie.findById(_id)
      .lean()
      .then((movie) => resolve(movie))
      .catch((err) => reject(err));
  });
};
