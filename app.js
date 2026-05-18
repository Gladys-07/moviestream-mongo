const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

const movieRoutes = require("./routes/movies");
const genreRoutes = require("./routes/genres");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/movies");
});

app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
}

startServer();