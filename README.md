# Generacion de Presupuestos TI - Ticket 1 

En este proyecto se realizo la construcción completa del backend y un poco del frontend de un sistema que permita la generación de Presupuestos para proyectos de TI.

Para poder acceder al proyecto, es necesario seguir los siguientes pasos :

 1. Clonar el repositorio con la instrucción:

    	git clone https://github.com/JSMind/Generacion-de-Presupuestos-Ticket-1.git
    
 El proyecto esta realizado en modelo-vista-controlador y los modelos de la base de datos estan echos para SQL Server.

 2. Una vez clonado el repositorio en la ruta deseada, es necesario instalar los modulos de nuestro servidor al ejecutar las siguiente líneas de comando desde la      terminal:

         	npm install
 3. Debe crearse el archivo .ENV con las variables de entorno para realizar la conexion con la base de datos.

 4. Después de instalar los modulos, es preciso inicializar el servidor al ejecutar la siguiente línea de comando:

         	npm run dev

 5. Para visualizar la pagína web, se puede acceder a la url http://localhost:3000/login  donde en la seccion signup el usuario podra registrarse para posteriormente
    iniciar sesion y dirigirse a la pagina /home.
    
 Si el usuario desea crear un nuevo presupuesto dirigirse al boton "Nuevo Presupuesto", se mostrara todas las tablas para crearlo.

    

