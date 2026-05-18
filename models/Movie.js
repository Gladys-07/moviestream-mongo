const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: Number,
  duration: Number,
  price: Number,
  genres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre"
    }
  ],
  actors: [
    {
      name: String,
      character: String
    }
  ],
  rating: Number
});

module.exports = mongoose.model("Movie", movieSchema);