# ¡Bienvenido!

Este es mi e-commerce, una tienda de ropa y calzado deportivo.

Para inicializar este proyecto es necesario ***clonarlo***, ejecutar ***npm install*** y luego ejecutar ***npm start***, para poder visualizarlo en el **localhost:3000**.

El proyecto fue desarrollado utilizando:

- HTML
- CSS
- Javascript
- React

## Desarrollo

Una vez iniciado el pryecto nos encontraremos con nuestra pagina de Inicio, que contiene un Navbar con nuestro logo y las diferentes secciones de la web donde podemos ir: **Inicio**, **Productos**, **Visitanos**.

El inicio esta compuesto por la primera seccion donde se encuentran los productos mas destacados, y la segunda seccion contiene un boton que nos lleva directamente la vista de Visitanos donde se pueden ver las sucursales, sus horarios y nuestras redes sociales donde los clientes pueden comunicarse con nosotros.

Luego viene la vista de los **Productos**, aque se va a mostrar todo el catalogo y tambien podremos filtrar los elementos de acuerdo a sus categorias.

Todos los productos que aparecen en la vista son traidos desde el **Firestore** de **Firebase**, la base de datos que nos provee Google donde todos los elementes ya fueron cargados ahi con anterioridad y que puede ser actualizada sin problemas.

Dentro de las card de los productos nos aparecera un boton *Ver detalles* que nos direccionara a la seccion detalles de los productos donde podremos ver sus propiedades.
Aqui tambien encontraremos el **Contador** con el que podremos elegir la cantidad de productos a comprar y tambien añadirlos al carrito de compras, haciendo que se inserte en el navbar el icono del carrito junto con la cantidad ennumerada de productos agregados.

Una vez en el **Carrito**, nos apareceran todos aquellos elementos que hemos agregado junto con todos sus detalles (imagen, nombre, cantidad, precio unitario, subtotal y precio total de la compra).
Aqui tambien nos encontraremos con botones que nos permitan eliminar los productos de a uno o todos juntos.
Una vez decidida la compra el siguiente paso es presioanr el boton *Comprar* para avanzar.

Por ultimo, luego de presioanr el boton correspondiente, nos dirigimos al tramo final donde tendremos a la izquierda un formulario que debemos completar con nuestros datos para poder hacer el pedido. Y del lado derecho la orden de compra que se llenara cuando nosotros hayamos completado TODO el formulario y le demos al boton *Cargar Datos*.
Finalmente, si esta todo en orden, presionaremos el ultimo boton de *Finalizar Compra* que nos generara la **Orden de compra**, cargara el pedido en nuestra base de datos y nos informara mediante una alerta/mensaje que la compra fue efectuada con exito.

## Variables de entorno

Para poder correr el proyecto sin ningun problema es necesario primero configurar las variables de entorno.

Encontraran las misma en el archivo de ejemplo llamado **".env.variables"**



![alt text](./public/primera-entrega-react.gif "Tittle")