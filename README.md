# 🎬 MovieStream MongoDB

Aplicación web desarrollada con **Node.js, Express y MongoDB** basada en el dominio MovieStream.  
El proyecto consiste en transformar un modelo relacional previamente trabajado en Oracle hacia un modelo documental utilizando MongoDB y Mongoose, aplicando conceptos de modelado NoSQL, referencias, embebidos y operaciones CRUD.

---

# 📌 Descripción del proyecto

MovieStream MongoDB es una plataforma web que permite administrar un catálogo de películas y géneros utilizando una base de datos documental.

El objetivo principal del proyecto fue comprender cómo adaptar un modelo relacional tradicional a MongoDB, tomando decisiones de diseño sobre:
- embebido de datos
- referencias entre colecciones
- relaciones muchos a muchos
- estructura documental

Además, se desarrolló una aplicación web funcional para validar el comportamiento real del modelo y visualizar las ventajas y desafíos de MongoDB frente a una base relacional.

---

# ✨ Funcionalidades

## 🎥 Gestión de películas
- Listar películas
- Buscar películas por título
- Crear películas
- Editar películas
- Eliminar películas
- Visualizar géneros y actores relacionados

## 🎭 Gestión de géneros
- Listar géneros
- Crear géneros
- Editar géneros
- Eliminar géneros
- Validación para evitar eliminar géneros utilizados por películas

---

# 🧩 Modelado Documental

## Colecciones utilizadas

### `movies`
Colección principal donde se almacenan las películas.

Incluye:
- título
- año
- duración
- precio
- rating
- géneros relacionados
- actores embebidos

### `genres`
Colección encargada de almacenar las categorías o géneros cinematográficos.

---

# ⚙️ Decisiones de diseño

## Referencias
Los géneros se manejaron mediante referencias (`ObjectId`) porque:
- un género puede pertenecer a múltiples películas
- evita duplicación de información
- facilita actualizaciones centralizadas

## Embebido
Los actores fueron embebidos dentro de las películas porque:
- simplifica las consultas
- mejora la lectura de datos
- reduce complejidad innecesaria

---

# 🛠️ Stack utilizado

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- EJS
- Method Override
- Dotenv
- Nodemon

---

# 📂 Estructura del proyecto

```txt
moviestream-mongo/
│
├── models/
│   ├── Movie.js
│   └── Genre.js
│
├── routes/
│   ├── movies.js
│   └── genres.js
│
├── views/
│   ├── movies/
│   └── genres/
│
├── public/
│   └── styles.css
│
├── seed.js
├── app.js
├── MODEL.md
├── REFLECTION.md
├── README.md
├── .env
└── package.json
```

---

# 🚀 Instalación del proyecto

## 1. Clonar repositorio

```bash
git clone <https://github.com/Gladys-07/moviestream-mongo.git>
cd moviestream-mongo
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
MONGO_URI=tu_cadena_de_mongodb_atlas
PORT=3000
```

---

# ☁️ Configuración de MongoDB Atlas

1. Crear un cluster gratuito en MongoDB Atlas.
2. Crear usuario y contraseña.
3. Habilitar acceso desde cualquier IP (`0.0.0.0/0`).
4. Obtener la cadena de conexión.
5. Reemplazar la variable `MONGO_URI`.

---

# 🌱 Poblar la base de datos

El proyecto incluye un archivo `seed.js` que genera automáticamente datos de prueba.

Ejecutar:

```bash
npm run seed
```

Esto crea:
- 20 películas
- 5 géneros
- actores embebidos
- relaciones funcionales entre colecciones

---

# ▶️ Ejecutar el proyecto

```bash
npm run dev
```

Abrir en navegador:

```txt
http://localhost:3000
```

---

# 🎨 Diseño de la interfaz

La interfaz fue diseñada con un estilo moderno utilizando:
- tonos naranja pastel
- tarjetas dinámicas
- formularios estilizados
- diseño responsive
- dashboard visual minimalista

---

# 📸 Capturas del sistema

## Página principal

<img width="1280" height="759" alt="Captura de pantalla 2026-05-17 a la(s) 8 13 03 p m" src="https://github.com/user-attachments/assets/f0bf954b-6502-40e5-a3ba-27e01bd1c3db" />

---

# 🌐 Deployment

La aplicación puede desplegarse utilizando:
- Render


URL pública:

```txt
https://moviestream-mongo-q32k.onrender.com
```

---

# 👩‍💻 Autor

Gladys Noemi Pérez Ramírez  
