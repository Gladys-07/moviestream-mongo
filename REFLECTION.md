# Reflexión - MovieStream MongoDB

Durante esta actividad aprendí que pasar un modelo relacional a MongoDB no consiste solamente en copiar tablas, sino en pensar cómo se van a consultar y modificar los datos dentro de una aplicación real.

En Oracle, MovieStream dependía mucho de tablas relacionadas, llaves foráneas y JOINs. En MongoDB el enfoque cambió, ya que tuve que decidir qué datos convenía embeber y cuáles era mejor referenciar.

Decidí referenciar los géneros porque pueden repetirse en muchas películas y es mejor mantenerlos en una colección separada. En cambio, los actores los embebí dentro de las películas porque en esta versión de la app solo se usan como información descriptiva de cada película.

Una ventaja que encontré es que MongoDB permite trabajar con datos de forma más flexible y rápida, especialmente para construir una app sencilla con CRUD. Sin embargo, también noté que algunas relaciones requieren más lógica desde el código, por ejemplo al evitar borrar un género que está siendo usado por películas.

Al construir la interfaz web pude comprobar que el modelo sí funcionaba, porque fue posible listar, crear, editar y eliminar películas y géneros. También entendí que un buen modelo documental debe pensarse desde el uso real de la aplicación, no solo desde la estructura de los datos.

En conclusión, esta actividad me ayudó a comparar mejor las ventajas y desventajas entre bases relacionales y NoSQL. MongoDB facilita ciertos desarrollos, pero requiere tomar buenas decisiones de diseño para evitar duplicación, inconsistencias o consultas difíciles de mantener.