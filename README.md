# web-reservas
Primera versión de la arquitectura del sitio web usando Node JS

Para ejecutar esta aplicación deben realizar los siguientes pasos:

1.- Instalar Node JS
2.- Usando la consola de comandos , navegar hasta el directorio de la app y ejecutar el comando "node app.js". Esto levantará un servidor
local el cual usa el puerto 3000 para publicar el sitio web. 
3.- Abrir navegador y escribir "http://localhost:3000/"

Directorio:

business : Contiene la logica de negocio. 

entities : Contiene las entidades del modelo de datos. Usamos Sequelize (modulo de Node js que funciona como ORM) 
                 para mapear los objetos de BD. 
controller : Contiene los controladores que se comunican con la capa de negocios para obtener datos y pasarlos a la vista.

node_modules: Modulos JS

public: css-js-images

views: Contiene las vistas de la app. 

layout : Contiene el layout o master page de la app. Como primera instancia usamos "handelbars" ( modulo de node js ) como 
         motor de vistas.



                

