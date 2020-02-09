function funcionAjaxAsincronaXML(){
    llamadaAsincrona2("servidor/datosXML.php","GET",null,"XML",tratarResultadoXML);
}


function tratarResultadoXML(textoXMLRespuesta){
    let  datos=textoXMLRespuesta;


    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    let peliculas = datos.documentElement.getElementsByTagName("MAQUILLAJE");

    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    let tabla="<table border='1'><tr><th>NOMBRE</th><th>DESCRIPCION</th><th>TIPO</th>";
    tabla+="<th>PRECIO</th><th>IMAGEN</th></tr>";

    // Hacemos un bucle para recorrer todos los elementos CD.
    for (let i=0;i<peliculas.length;i++){
        tabla+="<tr>";

        let nombre =peliculas[i].getElementsByTagName("NOMBRE");
        tabla+="<td>" + nombre[0].firstChild.nodeValue + "</td>";

        let descripcion =peliculas[i].getElementsByTagName("DESCRIPCION");
        if (descripcion[0].firstChild == null) {
            tabla+="<td></td>";
        }else{
            tabla+="<td>" + descripcion[0].firstChild.nodeValue + "</td>";
        }

        let precio =peliculas[i].getElementsByTagName("PRECIO");
        tabla+="<td>" + precio[0].firstChild.nodeValue + "</td>";

        let tipo =peliculas[i].getElementsByTagName("TIPO");
        tabla+="<td>" + tipo[0].firstChild.nodeValue + "</td>";

        let imagen =peliculas[i].getElementsByTagName("IMAGEN");
        if (imagen[0].firstChild == null) {
            tabla+="<td></td>";
        }else{
            tabla+="<td><img src='' alt='imagen' border='0'></img></td>";
        }
        

    // Cerramos la fila.
        tabla+="</tr>";
    }

    // Cuando ya no hay más peliculas cerramos la tabla.
    tabla+="</table>";

    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultado").innerHTML=tabla;
}