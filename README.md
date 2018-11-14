# Angular4_SpringBoot_CRUD
Demo de angular4 , SpringBoot, Hibernate, DB H2 CRUD demostración.

Para probar el proyecto, si no tienes instalado el Angular CLI, debemos instalarlo. Teniendo instaldo el npm de nodeJs (Esto se instala en windos descargandote el nodejs le das siguiente, siguiente, Finalizar. En Ubuntu es: sudo apt update, sudo apt install nodejs y vemos si esta instalado viendo la versión: nodejs --version y para instalar el npm: sudo apt install npm probamos la versión para saber, también, si se ha instalado: npm --version).

1.-Instalar el Angular cli:
estando dentro de la carpeta del frontend llamada "restCliAng" hacer:

npm install -g @angular/cli

2.- Luego para que vuelva a construir la carpeta node-modules donde estan los modulos que usamos de angular hacer:

npn install.

Refrescar el proyecto, deberia aparecer la carepta "node_modules".

3.- Encender el tomcat (Run el servidor de SpringBoot)  para que haga el build del proyecto backend e inserte 6 filas con Hibernate en la base de datos H2 y asi pueda consumirlo angular.

4.- En el frontend, estando dentro de la carpeta "restCliAng" hacer un:

ng serve --open. para que se abra el servidor angular en tu navegador por defecto.

