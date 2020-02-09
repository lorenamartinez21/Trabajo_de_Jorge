<?php
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
// Leemos el contenido del fichero XML
// e imprimimos su contenido.
// Muy importante indicar al navegador que va a recibir contenido XML
// eso lo hacemos con la siguiente cabecera:
header("Content-Type: text/xml");







$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "Tienda_de_Cosmetica";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT * FROM maquillaje";
$resultado = $conexion->query($sql);
$peliculas = array();
$a = 0;
if ($resultado->num_rows > 0) {
    $ficheroxml="<?xml version=\"1.0\" encoding=\"utf-8\"?>";
    $ficheroxml.='<COSMETICA>';
    while($pelicula = $resultado->fetch_assoc()) {
        $a++;
        $ficheroxml.='<MAQUILLAJE><NOMBRE>';
            $ficheroxml.=$pelicula["Nombre"];
        $ficheroxml.='</NOMBRE><DESCRIPCION>';
            $ficheroxml.=$pelicula["Descripcion"];
        $ficheroxml.='</DESCRIPCION><TIPO>';
            $ficheroxml.=$pelicula["Tipo"];
        $ficheroxml.='</TIPO><PRECIO>';
            $ficheroxml.=$pelicula["Precio"];
        $ficheroxml.='</PRECIO><IMAGEN>';
            $ficheroxml.=$pelicula["Imagen"];
        $ficheroxml.='</IMAGEN></MAQUILLAJE>';
    }
    $ficheroxml.='</COSMETICA>';


}



echo $ficheroxml;
?>
