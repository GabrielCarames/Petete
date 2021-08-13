
Phacebook - Mini clon de Facebook
=============

> Proyecto orientado a un grupo seleccionado de funcionalidades de Facebook.

<br />

## Imágenes

<br />

![Alt Text](https://media.giphy.com/media/PB3ZVzSZS0lAYUwTM7/giphy.gif)

<br />

## Tecnologías

<br />

[![Bootstrap](https://img.shields.io/badge/-Bootstrap-white?style=for-the-badge&logo=Bootstrap)](https://getbootstrap.com/)
[![CSS](https://img.shields.io/badge/-css-lightblue?style=for-the-badge&logo=css3)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Express](https://img.shields.io/badge/-express-black?style=for-the-badge&logo=express)](https://expressjs.com/es/)
[![Handlebars](https://img.shields.io/badge/-handlebars-blue?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAACc0lEQVR4nO3XS2hVVxTG8V9SJIVOqkKQ0toYBamTYq2UaumwWHVioA4Mgp05sBOLY4kjrR239GU7bmdSLHRgdZSISjtwoIagjoQQfCTRxkfSDva%2BcHI8N7nJPRcCrj8suOy917e%2Fde45%2B0EQBEEQBEEQBEEQBEEQBEEQBC8LXTXrbcYneB%2BbsC63j2MEv2J4EY0d2I8P0Jvb7mIMl%2FEnbtbquk26MSiZ%2B6%2BF%2BAvvVOhswYUWNS7hgJr%2FwDdwAr%2FhG%2BxsIWdTNtOK6WJM4dOCzl5ML0NnBBtb8PkRvs21DeVa57ETExUTHF9AdA%2FuL8N0Ix7jwzz3v23o3MPuBXwOVeRM5LnB25hcQLyKz%2FG8DdONGMvRrs5zHGri9UGTnIdYD1%2BXOm5iH27gWoXgYczWYLrumM3eylzLtQzk2oo5p1U0Hs2JX0iLW5EvMbcCim0WcwX%2FDQZxJP8%2BVhp%2FHWZKjd%2Fnwa8VRLrw1QoosNU4Zf4O0ajlx9K4x6Rvodj4BNsKyevxRwdMTuF2jqkO6J%2FL3htsx9PSmAek76OcPI0z%2BLlmc8M4iDe9yFu5b7jG%2BSZzHWfwqKL%2FBvzSgadfjBnpBLijouhmvIfvLO9ssJT4CT7rkPiotCCtXkLhZVZnjdEOeRyAV3C1JsFZnMUu6YhcF91Z86z6tuAruXbQjzttiI3jJPpqLLoZfXmu8Tb83sKGsvBaaZsor5TNYg7npUtJT%2F11LkpPnvu81s8mT%2FED1jREqm5TvdLlZKt02enDKmnLmME%2F0utzUXqSK4F%2BfCxtde%2FiVbyOZ5LHMfyN36U3JwiCIAiCIAiCIAiCIAiCIAiCl5D%2FAfRgc8CWIgbMAAAAAElFTkSuQmCC&style=for-the-badge)](https://handlebarsjs.com/)
[![Html](https://img.shields.io/badge/-html-black?style=for-the-badge&logo=html5)](https://developer.mozilla.org/es/docs/Web/HTML)
[![Javascript](https://img.shields.io/badge/-Javascript-critical?style=for-the-badge&logo=Javascript)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Jquery](https://img.shields.io/badge/-Jquery-violet?style=for-the-badge&logo=Jquery)](https://jquery.com/)
[![Mongodb](https://img.shields.io/badge/-Mongodb-lightblue?style=for-the-badge&logo=Mongodb)](https://www.mongodb.com/es)
[![Node](https://img.shields.io/badge/-Node-black?style=for-the-badge&logo=Node.js)](https://nodejs.org/es/)
[![Passport](https://img.shields.io/badge/-Passport-black?style=for-the-badge&logo=passport)](http://www.passportjs.org/)
[![Socket](https://img.shields.io/badge/-Socket-black?style=for-the-badge&logo=Socket.io)](https://socket.io/)

<br />

## Funcionalidades

<br />

> Sistema de Ingreso/Registro

* El usuario deberá de registrarse una cuenta antes de acceder al sitio. El registro está compuesto por una serie de campos a rellenar con datos personales, los cuales serán enviados, procesados y almacenados en una tabla de Usuarios en una base de datos. Luego, se podrá ingresar con la cuenta existente en la sección de ingreso en donde se verificarán los datos ingresados y se realizará un Log In. 
Todo este sistema es realizado a través del middleware de ***Passport.js*** y los datos son almacenados en ***MongoDB*** por la librería de ***Mongoose***.

> Menú desplegables

* La página inicial cuenta con dos menús desplegables activables a partir de un botón en ambos lados de la misma. Uno corresponde a las Notificaciones y el otro a los Amigos agregados/existentes. Ambos mostrarán los datos correspondientes con las notificaciones disponibles y los amigos conectados.

> Buscador

* En el navbar se encuentra un buscador con el cual se podrá buscar a partir de un nombre, aquellos usuarios equivalentes. El sistema realizará una consulta a la BD con la búsqueda y posteriormente mostrará sus resultados. Aquellas personas que todavía no estén agregadas, se las podrá añadir a partir de un botón. En caso una búsqueda fallida, se mostrará un mensaje de error.

> Agregar amigos

* Si se quiere añadir una persona a la lista de amigos, luego de cliquear en el botón correspondiente, se buscará a aquella persona y se le creará una nueva notificación informando sobre el emisor, cuando se realizó y el tipo de notificación. En caso de que ya se tenga agregada a ésta, se informará en un mensaje.
Luego, si el receptor acepta la solicitud de amistad, ambos podrán visualizarse uno al otro en su correspondiente menú de amigos.

> Chat en tiempo real

* Al momento de realizar un click sobre un amigo existente, una pestaña de chat se mostrará con los datos y mensajes enviados o recibidos. Ambos usuarios podrán enviarse y recibir mensajes de texto en tiempo real gracias a la biblioteca de ***Socket.io***. Cada mensaje es alojado en una tabla dentro de la BD, por lo que el historial de mensajes también mostrado en tiempo real. Además, los propios chats pueden ser minimizados a voluntad.

> Sistema de publicaciones

* Dentro de la página de inicio, el usuario será capaz de hacer click sobre un input en donde se mostrará un modal con un par de campos a completar. Los datos introducidos son almacenados y publicados dentro de la sección de publicaciones informando su fecha de creación y de forma global, todo el mundo podrá visualizarlos.
