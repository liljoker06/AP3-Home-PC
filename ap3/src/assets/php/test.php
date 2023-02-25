<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
$host = "localhost" ;
$user = "root";
$password = ""; 
$dbname = "ap3"

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

if(!$con) {REQUEST_METHOD};

if (!$con) {
    die("Connection failed :". mysqli_connect_error());
}

switch($method) {
    case 'POST' :
    $Nom = $_POST["Nom"];
    $Prenom = $_POST["Prenom"];
    $Email = $_POST["Email"];
    $Mdp = $_POST["Mdp"];
    $sql = "insert into utilisateur ("Nom,Prenom,Email,Mdp) values ('$Nom','$Prenom','$Email','$Mdp');
    break;
}

$resultat = mysqli_querry($con,$sql);

if (!$resultat) {
    http_response_code(404);
    die(mysql_error($con));

}

if ($method == 'POST') {
    echo json_encode($resultat);
}
else{
    echo mysql_affected_rowq($con);
}



$con -> close();