# Inicialización, Agregado y Subida de Archivos a GitHub con Git

Versionar archivos en un repositorio es esencial para cualquier desarrollador. Git, en combinación con GitHub, nos permite llevar el control de versiones de nuestro código, colaborar con otros y mantener un historial de los cambios realizados. A continuación, te explicaremos los pasos para inicializar un repositorio local, agregar archivos, realizar commits y subirlos a GitHub.

---

## 1. Inicializando un Repositorio Git

Para empezar a trabajar con Git en tu proyecto, lo primero que necesitas es inicializar un repositorio local en tu máquina. Esto creará un directorio especial `.git` que llevará el seguimiento de tus archivos y los cambios que realices.

### _Comando_

````
git init
````

**Ejemplo:**
Si tienes un proyecto en una carpeta llamada `mi_proyecto`, abre la terminal y navega hasta esa carpeta:

```bash
cd mi_proyecto
git init
```
Este comando creará un repositorio vacío en la carpeta actual. A partir de ahora, Git estará rastreando cualquier cambio en los archivos dentro de este directorio.

---

## 2. Agregando Archivos al Área de Preparación (Staging Area)

Antes de confirmar (o commitear) tus cambios, necesitas agregar los archivos que deseas incluir en el commit al área de preparación. Esto lo puedes hacer con el comando `git add`.

### _Comando_

````
git add <nombre_del_archivo>
````
Si deseas agregar todos los archivos, puedes usar ``git add .``

**Ejemplo:**

Supón que has creado un archivo llamado ``index.html``:

````bash
git add index.html
````

Si tienes múltiples archivos y deseas agregarlos todos:

````bash
git add .
````
---
## Realizando un Commit de los Archivos

Una vez que los archivos estén en el área de preparación, puedes realizar un ``commit``. Un commit es un "snapshot" del estado de tu proyecto en ese momento.

### _Comando_
````bash
git commit -m "Mensaje del commit"
````
El mensaje dentro de las comillas debe describir los cambios que has hecho.

**Ejemplo:**
````bash
git commit -m "Agregar el archivo index.html con la estructura básica del proyecto"
````
---
## 4. Vinculando el Repositorio Local con un Repositorio en GitHub

Ahora que tienes un repositorio local, es hora de conectarlo a GitHub para que puedas guardar y compartir tu código en la nube. Primero, debes crear un repositorio en GitHub (sin inicializarlo con un ``README`` ni ningún archivo). Luego, vincúlalo a tu repositorio local con el siguiente comando:

### _Comando_
````bash
git remote add origin <URL_del_repositorio_en_GitHub>
````
Sustituye ``<URL_del_repositorio_en_GitHub>`` por la URL de tu repositorio en GitHub, que se verá algo así:

**Ejemplo:**
````bash
git remote add origin https://github.com/usuario/mi_proyecto.git
````
---
## 5.Subiendo Cambios a GitHub

Finalmente, para subir tus cambios al repositorio en GitHub, usa el siguiente comando:

### _Comando_

````bash
git push -u origin master
````

El argumento ``-u`` establece el enlace entre tu repositorio local y el remoto, y ``master`` es la rama principal.

>Tener en cuenta que solo se usa la primera vez que se hace un push desde la nueva rama

**Ejemplo:**

````bash
git push -u origin main
````

Este comando subirá todos los commits que hayas realizado a tu repositorio remoto en GitHub.

Luego de haber realizado el primer push se usa el siguiente comando:

````bash
git push 
````
---
## Recursos

- [Documentación odicial de GIT](https://git-scm.com/doc "Te redirige a el repositorio de información de GIT")
- [Guía de GitHub](https://docs.github.com/es "Te redirige a la documentación de GitHUb")
- [Guía rápida de GIT](https://www.youtube.com/watch?v=vlCXdvcgiE0 "Veras un video dondé te explican el uso de GIT en 15 minutos")
---
>## Conclusiones
>Siguiendo estos pasos, has aprendido cómo inicializar un repositorio Git, agregar archivos, realizar commits y subir tu trabajo a GitHub. El uso de Git y GitHub en tus proyectos facilita la colaboración, el control de versiones y la gestión del código. ¡Te animamos a practicar estos comandos y familiarizarte con ellos en tu próximo proyecto!

---

Estudiante: Andrés Felipe Naranjo González