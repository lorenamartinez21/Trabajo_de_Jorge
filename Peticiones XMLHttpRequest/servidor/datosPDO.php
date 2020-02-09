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
$stmt = $conn->prepare("SELECT * FROM maquillaje");
$stmt->execute();
$peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($peliculas);
?>