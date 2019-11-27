# Proyecto Desarrollo Web en Cliente

* Este trabajo se puede hacer en grupo de máximo 3 personas o individual. Pero en los trabajos en grupo, deberá indicarse claramente quién ha realizado cada parte.

* La página web deberá estar didvida en 4 páginas, dónde cada una tendrá un menu que hará accesible el acceso a las demás páginas. (Obligatorio).

* Las páginas a desarrollar serán las siguientes(No es obligatorio implementar todas las funciones y páginas, pero si deben cumplir las especificaciones que se detallen, aquellas que se implementen):

  * Página de búsqueda:
    * Función que  deberá devolver los elementos filtrados por dos campos especificados por el alumno en el código.
    * Función que deberá devolver un elemento que sea similiar a otro. Los detalles que determinan si en elemento es similar a otro deberá especificarlo el alumno en el código.
    * Función que busca los elementos asociados a un usuario.
    * Una función definida por el alumno y que encaje en la funcionalidad de la página.
  * Página de Edición:
    * Función que cree o edite el elemento principal de la página.
    * Función que valide todos los campos de creación del elemento principal de la página. El alumno debe detallar los requisitos que deben cumplirse para que sea válido.
    * Función que debe añadir o cambiar el usuario que esta asociado al elemento. SI el elemento no tiene usuarios asociados, se crea. Si el elemento tiene un usuario asociado, se cambia.
    * Una función definida por el alumno y que encaje en la funcionalidad de la página.
  * Página de Gestión:
    * Función que obtenga 10 elementos que cumplan varios requisitos a la vez.
    * Función que deba obtener el elemento mejor valorado y además que cumpla varios requisitos a la vez. 
    * Función que ordene los elementos según el campo especificado.
    * Una función definida por el alumno y que encaje en la funcionalidad de la página.
  * Página del Usuario:
    * Función que permita a un usuario votar y opinar sobre el elemento.
    * Función que permitar obtener los elementos que ha votado un usuario.
    * Función que obtenga los elementos similares a los elementos favoritos del usuario.
    * Una función definida por el alumno y que encaje en la funcionalidad de la página.

* El proyecto deberá estar subido a un repositorio de git. (Obligatorio)

* Debe utilizarse la herramienta timetracker o similiar para indicar el tiempo empleado en cada función.(Obligatorio).

* En el README.md del proyecto debe incluirse el informe de tiempo empleado en cada función. (Obligatorio)

* Antes de implementar cada una de las funciones, deberán crearse las clases que se van a usar. Deberán leerse las funciones que se solicitan y en base a ellas, crear las clases con las propiedades correspondientes. Todos estas clases estarán en el mismo archivo .js. " (Obligatorio)

* Debe configurarse el proyecto con las librerías de desarrollo explicadas en clase u otra con la misma funcionalidad(Obligatorio):

  - ESLINT
  - Babel
  - Uglify u otros

* El código debe cumplir con la guía de estilo añadida en el proyecto, puede utilizarse la de google , la que viene por defecto o cualquier otra.

* El código resultante que debe funcionar debe ser el que se genere tras aplicarse Babel y después el minimizador.

* Cada página deberá contener uno o varios archivos .js, dónde se declararan las funciones. Estos archivos deben cargarse de forma asíncrona y evitar que se cachen en el navegador.(Obligatorio)

* Cada función valdrán 0.3 puntos.Si en una página están todas las funciones bien, se recibirá un 0.1 extra. Si una función no cumple con los siguientes requisitos, valdrá un cero(Total 5 puntos).:

  * Incluir comentarios en cada una de las funciones implementadas, detallando en que consiste la función y describiendo los parámetros de entrada y salida que tiene.
  * Deberá incluirse comentarios en las partes complejas del código, pero no comentar todas las líneas, también es importante que nuestro código se entienda fácilmente sin usar comentarios. 
  * Al final de cada archivo .js, debe incluirse una función por cada una implementada. En estas funciones se harán 4 llamadas a la función correspondiente con diversos parámetros de entrada, mostrando por consola el resultado.Esto serán nuestros casos de prueba. Puede utilizarse una librería externa para hacer pruebas en javascript.
  * Todos los métodos deben funcionar y pasar los test de pruebas. En el caso de no cumplir este punto, se evaluará dicho método con un cero.
  * Si se utiliza alguna implementación de un código de internet, deberá indicarse de dónde se ha sacado. Pero dicho código debe adaptarse al estilo de código del alumno y deberán redefinirse las variables e incluirse comentarios propios.
  * Debe apreciarse en la web claramente el resultado de la función, de cómo estaba antes el conjunto de objetos de prueba y como estaba después. Para ello debemos usar el DOM, ya sea con Jquery o con javascript. Os listo algunos ejemplos:
    - Por ejemplo, si listáis un conjunto de personas con sus datos, si se filtra, deben aparecer esa misma lista pero solo con los casos que cumplan el filtrado o cambiar de color los casos que cumplan el filtrado.
    - Si añadis o editáis una persona, debe apreciarse en el listado que se ha incluido una nueva persona. 
    - En el apartado de votaciones, debe aparecer todas las votaciones que se han recibido, con su comentario correspondiente, y al realizar yo una votación, que aparezca la nueva votación con su comentario.
    - Si algún parámetro que se indique por input da error, deberá marcarse el input en rojo, y si está bien se marcará en verde. 
  * Cada funcionalidad debe incluirse una issue en repositorio de control de versiones dónde se ubica el código del proyecto, y cerrar dicha issue con los commits correspondientes a la función.
  * Una función puede dividirse en varias más pequeñas, pero sólo se harán pruebas en la función principal.

* Se penalizará que haya código repetido en distintas funciones, ese código deberá incluirse en una misma función y si varias páginas lo usan, es aconsejable que se cree un archivo .js específico que sea utilizado en varias páginas.(Cada función con código repetido tendrá un 0.1 menos)

* Deberá incluirse un botón que ejecute todas las pruebas de las funciones. (Obligatorio)

* Para gestionar el DOM, debe usarse en dos funciones con javascript y en otras dos con Jquery.(Obligatorio)

* A continuación se detallan algunos requisitos generales del código que incrementan la puntuación del proyecto(Total 4 puntos):

  * Incluir en una de las funciones código que utilice expresiones regulares en cada página.(0.4 puntos: 0.1 por página)
  * Incluir en una de las funciones código que utilice una función global en cada página.(0.4 puntos: 0.1 por página)
  * Incluir en una de las funciones código que devuelva otra función en cada página.(0.4 puntos: 0.1 por página)
  * Incluir en una de las funciones código que utilice el estilo flecha en cada página.(0.4 puntos: 0.1 por página)
  * Incluir en una de las funciones código que  realice la gestión de expceciones en una función de cada página. (0.4 puntos: 0.1 por página)
  * Incluir en cada página tres eventos distintos javascript => click, change, focus,etc.. .El evento onclick del botón que ejecuta las pruebas, no es válido. (0.8 puntos: 0.2 por página)
  * Incluir en dos de las funciones código que realice efectos de Jquery en cada página.(0.4 puntos: 0.1 por página)
  * Incluir en dos de las funciones código que realice animaciones de Jquery en cada página.(0.4 puntos: 0.1 por página)
  * Incluir en cada una de las funciones código que se ejecute con setTimeOut o setInterval en cada página.(0.4 puntos: 0.1 por página).

* Si re realizan las pruebas utilizando la librería de Mocha, se obtendrá 0.25 puntos por cada página.(Total 1 punto)

* En el README.md del proyecto debe indicarse que requisitos generales del código cumplen cada función(indicando la línea de código por la que empieza), comentados anteriormente, sino no se tendrá en cuenta que cumple dicho requisito( También puede hacerse al revés).(Obligatorio).

* Deberá entregarse al profesor el enlace al repositorio git para que pueda descargarse el proyecto.(Obligatorio)

  
