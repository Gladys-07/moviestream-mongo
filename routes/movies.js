const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const Genre = require("../models/Genre");

router.get("/", async (req, res) => {
  const search = req.query.search || "";

  const movies = await Movie.find({
    title: { $regex: search, $options: "i" }
  }).populate("genres");

  res.render("movies/index", { movies, search });
});

router.get("/new", async (req, res) => {
  const genres = await Genre.find();
  res.render("movies/new", { genres });
});

router.post("/", async (req, res) => {
  const movieData = {
    title: req.body.title,
    year: req.body.year,
    duration: req.body.duration,
    price: req.body.price,
    rating: req.body.rating,
    genres: req.body.genres,
    actors: [
      {
        name: req.body.actorName,
        character: req.body.character
      }
    ]
  };

  await Movie.create(movieData);
  res.redirect("/movies");
});

router.get("/:id/edit", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  const genres = await Genre.find();
  res.render("movies/edit", { movie, genres });
});

router.put("/:id", async (req, res) => {
  const movieData = {
    title: req.body.title,
    year: req.body.year,
    duration: req.body.duration,
    price: req.body.price,
    rating: req.body.rating,
    genres: req.body.genres,
    actors: [
      {
        name: req.body.actorName,
        character: req.body.character
      }
    ]
  };

  await Movie.findByIdAndUpdate(req.params.id, movieData);
  res.redirect("/movies");
});

router.delete("/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
});

module.exports = router;