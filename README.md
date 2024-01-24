# Proyecto de Transporte API

Este proyecto utiliza las siguientes tecnologías y frameworks para proporcionar una API de gestión de transporte:

## Tecnologías Utilizadas

- **Express**: Un marco web rápido y minimalista para Node.js que simplifica la creación de aplicaciones web y API.

- **TypeScript**: Un superset de JavaScript que agrega tipado estático opcional y otras características a la sintaxis de JavaScript.

- **tsc-node**: Un paquete que permite ejecutar scripts TypeScript directamente en Node.js sin necesidad de compilarlos por separado.

- **Node.js**: Un entorno de ejecución de JavaScript del lado del servidor que permite la construcción de aplicaciones escalables y de alto rendimiento.

- **TypeORM**: Un ORM (Object-Relational Mapping) para TypeScript y JavaScript que simplifica la interacción con bases de datos relacionales. En este caso, se utiliza con PostgreSQL.

## Razones para la Elección

- **Express**: Elegí Express por su simplicidad y su capacidad para crear API de manera rápida y eficiente. Además, cuenta con una gran comunidad y una amplia variedad de middleware.

- **TypeScript**: Opté por TypeScript para mejorar la calidad y mantenibilidad del código mediante el uso de tipado estático, facilitando la detección temprana de errores y mejorando la autodocumentación del código.

- **tsc-node**: Esta herramienta facilita la ejecución de scripts TypeScript directamente en Node.js sin necesidad de un paso de compilación separado, lo que simplifica el proceso de desarrollo.

- **Node.js**: La elección de Node.js se basa en su rendimiento y escalabilidad, así como en la familiaridad con el entorno de ejecución.

- **TypeORM con PostgreSQL**: TypeORM proporciona un conjunto de herramientas y abstracciones que simplifican las operaciones de la base de datos. PostgreSQL se seleccionó por su robustez y capacidades avanzadas.

## Buenas Prácticas de Programación

- **Tipado Fuerte**: Se emplea TypeScript para aprovechar el tipado estático y mejorar la seguridad y calidad del código.

- **RESTful API**: La API se diseña siguiendo los principios de arquitectura REST para garantizar una interfaz uniforme y fácil de consumir.

- **Estructura de Proyecto**: Se sigue una estructura de proyecto clara y organizada para facilitar la escalabilidad y mantenimiento a medida que el proyecto crece, se implementaron varias capas, para el manejo de interfaces, entidades, controladores, servicios, rutas y aplicación, dando así un funcionamiento similar al de la Arquitectura Hexgonal, mientras a la vez se permite utilizar el patrón de diseño MVC.

- **Principios SOLID**: Utilcé los principios del patrón SOLID 
--Principio de Responsabilidad Única:
    Un ejemplo en mi arquitectura es que la clase VehicleService tiene métodos claramente definidos para realizar operaciones específicas relacionadas con los vehículos, como registro, actualización, búsqueda y eliminación. Cada método aborda una responsabilidad específica relacionada con la gestión de vehículos.

--Principio Abierto/Cerrado:
    Este rpincipio lo aplico no con la extensión, pero si con la implementación de las interfaces en mis servicios, dandole así una reglamentación especifica que no esta abierta a la modificación propia de los métodos que la contienen.

--Principio de Segregación de Interfaces:
    En mi código se puede evidenciar que no vialamos este principio, ya que todas las interfaces que han sido creadas, se estan implementando.

--Principio de Inversión de Dependencias:
    Un ejemplo claro es mi driverService, donde estoy inyectando en cada uno de los métodos las dependencias de Request y Response, propias de mi frameword de express.



--**Clean Code**: Para fácilitar el entendimiento del código, se  quitado el código spagueti, se da nombres claros a varibales y métodos y se ha separado la lógica de negocio.

Este proyecto se desarrolló con el objetivo de demostras mis hábilidades técnicas en la realización de esta prueba.
