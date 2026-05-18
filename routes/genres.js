const express = require("express");
const router = express.Router();
const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

router.get("/", async (req, res) => {
  const genres = await Genre.find();
  res.render("genres/index", { genres });
});

router.get("/new", (req, res) => {
  res.render("genres/new");
});

router.post("/", async (req, res) => {
  await Genre.create(req.body);
  res.redirect("/genres");
});

router.get("/:id/edit", async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  res.render("genres/edit", { genre });
});

router.put("/:id", async (req, res) => {
  await Genre.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/genres");
});

router.delete("/:id", async (req, res) => {
  const moviesUsingGenre = await Movie.find({ genres: req.params.id });

  if (moviesUsingGenre.length > 0) {
    return res.send("No puedes eliminar este género porque está siendo usado por películas.");
  }

  await Genre.findByIdAndDelete(req.params.id);
  res.redirect("/genres");
});

module.exports = router;