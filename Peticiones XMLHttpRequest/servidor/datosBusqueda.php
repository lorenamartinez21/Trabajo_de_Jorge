<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "Tienda_de_Cosmetica";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$nombre = false;
$precio = false;
$descripcion = false;
$animal = false;
$tipo = false;


if ($_POST['nombre'] != "") {
	$nombre = true;
}

if ($_POST['precio'] != "") {
	$precio = true;
}

if ($_POST['descripcion'] != "") {
	$descripcion = true;
}

if ($_POST['animal'] === "true") {
	$animal = true;
}

if ($_POST['tipo'] != "") {
	$tipo = true;
}


if ($nombre) {
	
	$stmt = $conn->prepare("SELECT * FROM maquillaje WHERE Nombre LIKE '%".$_POST['nombre']."%'");

}elseif ($precio) {
	
	$stmt = $conn->prepare("SELECT * FROM maquillaje WHERE Precio =".$_POST['precio']);

}elseif ($animal) {
	
	$stmt = $conn->prepare("SELECT * FROM maquillaje WHERE Animal  = ".$_POST['animal']);

}elseif ($tipo) {
	
	$stmt = $conn->prepare("SELECT * FROM maquillaje WHERE Tipo LIKE '%".$_POST['tipo']."%'");

}elseif ($descripcion) {
	
	$stmt = $conn->prepare("SELECT * FROM maquillaje WHERE Descripcion LIKE '%".$_POST['descripcion']."%'");

}else {
	$stmt = $conn->prepare("SELECT * FROM maquillaje");
}


$stmt->execute();
$peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($peliculas);
?>