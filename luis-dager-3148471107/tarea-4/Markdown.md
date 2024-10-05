
# Inicialización, Agregado y Subida de Archivos a GitHub con Git          

## Instruducción

La  importancia de un control de versiones es un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones específicas más adelante.

### Paso a paso cómo inicializar un repositorio Git 

1. Crear una carpeta para tu proyecto y colocar archivos

2. Inicializar el repositorio Git.

Es la inicialización del repositorio Git que queremos crear en la carpeta de tu proyecto y es una operación que deberás realizar una única vez para este proyecto.

``` 
git init
```
3. Guardar los archivos en el repositorio (commit)

A esa acción de guardar los archivos en el repositorio se llama, en la jerga de Git, hacer un "commit". En español sería "hacer una confirmación" del código. En este caso el commit lo estás haciendo en local, porque los archivos los estás enviando a tu repositorio local que tienes en tu máquina.

Un commit en Git se hace mediante dos pasos:

- **Añadir los archivos al staging area**

Comenzamos por añadir el fichero o ficheros a una zona intermedia temporal que se llama "Zona de Index" o "Staging Area", que es una zona que utiliza Git donde se van guardando los ficheros que posteriormente luego se van a hacer un commit.

Cualquier archivo que quieras mandar a la zona de index lo haces con el comando "add".

``` 
git add nombre-de-la-rama
```
Una vez añadido podrías ver que realmente tienes ese fichero en el "staging area", mediante el comando "status".

``` 
git status
```

Muchas veces queremos enviar varios archivos al staging area y lo queremos hacer de una única vez, por lo que es típico indicarle a Git que mueva todos los cambios realizados a la zona de index, indicando "." en vez del nombre de archivo.

``` 
git add .
```

**Confirmar archivos con commit**

Como segundo paso tenemos que enviar los archivos de la zona de Index al repositorio, lo que se denomina el "commit" propiamente dicho. Lo haces con el siguiente comando:

``` 
git commit -m "mensaje para el commit"
```
Con esto ya tenemos nuestro primer archivo (o archivos si hemos confirmado todos a la vez) dentro del repositorio. A partir de aquí podremos mantener y controlar los cambios que se hagan sobre este archivo (u otros que hayamos incluido por medio del commit).

**Vincular tu repositorio local con un repositorio remoto en GitHub**

Luego cuando ya tenemos nuestros commit es buena idea subir los cambios a nuestro repositorio remoto de GitHub, que es finalmente donde se conectan nuestros compañeros de equipo o nosotros mismos desde otra maquina. Para comunicarnos con el repositorio remoto tendremos que agregarlo primero, si clonamos el repositorio este vendrá configurado por defecto con el nombre origin si no, debemos agregarlo de la siguiente manera, usando el siguiente comando.

~~~
git remote add {repoName} {repoURL}
~~~
De esta manera asociaremos a nuestro repositorio una versión remota.

Una vez ya tenemos esta versión remota configurada podemos subir los cambios haciendo uso del comando git push.

 subamos entonces los cambios a nuestro repositorio remoto haciendo uso del comando git push, este comando maneja la siguiente estructura git push {remote origin name} {remote origin branch}, el primer parametro lo sabemos que ya lo visualizamos y nuestro origen por defecto de GitHub cuando clonamos un repo se llama origin y cuando iniciamos un nuevo repo y no hemos creado una nueva rama, la única que tendremos por defecto es main, entonces, completemos el comando de la siguiente manera.

~~~
git push origin main
~~~

**Ejemplo**
~~~
git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git

git push -u origin master
~~~


*Recursos adicionales*

* [Como crear un repo con git.](https://desarrolloweb.com/articulos/iniciar-repositorio-git-primer-commit.html)  

* [Manejo de versiones y creacion de un repo con Kambcode.  ](https://github.com/KambcodeLatam/FullStack_Javascript_G12_JUL_2024/blob/main/MODULO_3/Clase-1/README.md)

 [![mi primer commit](https://cdn-icons-png.flaticon.com/128/1384/1384060.png)](https://youtu.be/hh_uXBPVXjs) 





## Conclusión ##

Entender la importancia del control de versiones es crucial para cualquier desarrollador y aprendiz en este mundo tecnologico y Git es una de las herramientas más poderosas en este campo que nos facilita aprender de manera facil y remota algunos comando son muy interesante como lo son:.

**Comandos Básicos de Git**: Hemos aprendido sobre git init, git add, git commit, git push, git pull, y git merge, entre otros. Dominar estos comandos es esencial para manejar tus proyectos eficientemente.

**Trabajo con Ramas:** Las ramas son fundamentales para trabajar en múltiples características al mismo tiempo sin afectar la base principal del código.

**Pull Requests en GitHub:** Estas herramientas facilitan la colaboración y son esenciales para trabajar en proyectos abiertos y equipos grandes.
