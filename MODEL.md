# Modelo Documental - MovieStream MongoDB

## Descripción General

El modelo relacional original de MovieStream fue transformado a un modelo documental utilizando MongoDB y Mongoose.

El objetivo principal fue reducir la complejidad de JOINs y aprovechar la flexibilidad del modelo documental.

---

# Colecciones Finales

## 1. movies

```json
{
  "_id": "ObjectId",
  "title": "Interstellar",
  "year": 2014,
  "duration": 169,
  "price": 59.99,
  "rating": 4.8,
  "genres": [
    "ObjectId"
  ],
  "actors": [
    {
      "name": "Matthew McConaughey",
      "character": "Cooper"
    }
  ]
}
```

### Decisiones de diseño

- Los géneros fueron manejados mediante referencias (`ObjectId`) porque:
  - varios géneros pueden pertenecer a muchas películas.
  - evita duplicar información.
  - permite actualizar un género una sola vez.

- Los actores fueron embebidos dentro de cada película porque:
  - en este proyecto solo se utilizan dentro de una película.
  - simplifica las consultas.
  - evita crear otra colección adicional.

---

## 2. genres

```json
{
  "_id": "ObjectId",
  "name": "Ciencia ficción",
  "description": "Películas futuristas y tecnológicas"
}
```

### Decisiones de diseño

- Se creó una colección independiente porque los géneros son reutilizados por múltiples películas.
- Facilita filtros y búsquedas por categoría.

---

# Relaciones

## Películas ↔ Géneros

Relación muchos a muchos.

### Solución documental

Se utilizaron referencias desde `movies` hacia `genres`.

---

# Consultas más fáciles

- Obtener películas con sus géneros.
- Buscar películas por nombre.
- Mostrar actores de una película.
- Filtrar películas por género.

---

# Consultas más difíciles

- Consultas analíticas complejas.
- Estadísticas muy relacionales.
- Actualizaciones masivas de actores embebidos.

---

# Trade-offs encontrados

## Ventajas

- Menor complejidad que SQL.
- No se necesitan JOINs tradicionales.
- Mayor flexibilidad en documentos.
- Desarrollo rápido del CRUD.

## Desventajas

- Riesgo de duplicación en datos embebidos.
- Relaciones complejas requieren más lógica manual.
- Menor normalización que un modelo relacional.