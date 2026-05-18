const mongoose = require("mongoose");
require("dotenv").config();

const Movie = require("./models/Movie");
const Genre = require("./models/Genre");

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");

    await Movie.deleteMany({});
    await Genre.deleteMany({});

    const genres = await Genre.insertMany([
      { name: "Acción", description: "Películas con aventura y escenas intensas." },
      { name: "Drama", description: "Historias emocionales y profundas." },
      { name: "Comedia", description: "Películas enfocadas en humor." },
      { name: "Ciencia ficción", description: "Tecnología, futuro y mundos imaginarios." },
      { name: "Romance", description: "Historias de amor y relaciones." }
    ]);

    const movies = [
      ["Aventura Galáctica", 2021, 125, 59.99, 4.5, [genres[0]._id, genres[3]._id], "Sofía Luna", "Capitana Nova"],
      ["Amor en Invierno", 2020, 110, 49.99, 4.2, [genres[4]._id, genres[1]._id], "Diego Ruiz", "Mateo"],
      ["Risas de Oficina", 2019, 95, 39.99, 4.0, [genres[2]._id], "Laura Méndez", "Claudia"],
      ["El Último Código", 2023, 130, 69.99, 4.8, [genres[0]._id, genres[3]._id], "Carlos Vega", "Hacker Zero"],
      ["Sombras del Pasado", 2018, 118, 44.99, 4.1, [genres[1]._id], "Ana Torres", "Elena"],
      ["Planeta Azul", 2022, 140, 64.99, 4.6, [genres[3]._id, genres[1]._id], "Marco Silva", "Dr. Orion"],
      ["Cita Inesperada", 2021, 102, 42.99, 3.9, [genres[4]._id, genres[2]._id], "Valeria Soto", "Lucía"],
      ["Misión Solar", 2024, 128, 74.99, 4.7, [genres[0]._id, genres[3]._id], "Andrés Molina", "Comandante Sol"],
      ["La Ciudad Perdida", 2020, 122, 54.99, 4.3, [genres[0]._id], "Paula Ramos", "Exploradora Lara"],
      ["Historias de Café", 2017, 90, 29.99, 3.8, [genres[2]._id, genres[4]._id], "Jorge Castillo", "Tomás"],
      ["Ecos del Silencio", 2022, 115, 52.99, 4.4, [genres[1]._id], "Renata Flores", "Marina"],
      ["Robot 2045", 2023, 135, 68.99, 4.6, [genres[3]._id], "Luis Herrera", "AX-9"],
      ["Día de Suerte", 2019, 98, 35.99, 3.7, [genres[2]._id], "Mónica León", "Paty"],
      ["Corazón de Verano", 2018, 105, 38.99, 4.0, [genres[4]._id], "Emilio Cruz", "Nicolás"],
      ["Ruta Extrema", 2021, 120, 55.99, 4.2, [genres[0]._id], "Daniela Ortiz", "Alex"],
      ["Memorias Fragmentadas", 2020, 112, 46.99, 4.1, [genres[1]._id, genres[3]._id], "Fernando Ríos", "Dr. Lema"],
      ["Vacaciones Caóticas", 2022, 100, 41.99, 3.9, [genres[2]._id], "Camila Navarro", "Sara"],
      ["Estrella Lejana", 2024, 145, 79.99, 4.9, [genres[3]._id, genres[4]._id], "Iván Morales", "Leo"],
      ["La Promesa", 2017, 108, 33.99, 3.8, [genres[1]._id, genres[4]._id], "Elena Vargas", "Isabel"],
      ["Código Final", 2023, 126, 66.99, 4.5, [genres[0]._id, genres[3]._id], "Raúl Peña", "Agente X"]
    ];

    await Movie.insertMany(
      movies.map(movie => ({
        title: movie[0],
        year: movie[1],
        duration: movie[2],
        price: movie[3],
        rating: movie[4],
        genres: movie[5],
        actors: [
          {
            name: movie[6],
            character: movie[7]
          }
        ]
      }))
    );

    console.log("Base de datos poblada correctamente");
    process.exit();
  } catch (error) {
    console.error("Error en seed:", error);
    process.exit(1);
  }
}

seedDB();