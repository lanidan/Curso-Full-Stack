<?php
include_once('db.php');

$conectar= conn(); //ejecuta las conexiones con db

//recibe los datos
$nombre =mysql_real_escape_string($conectar, $_POST ['nombre']);
$apellido =mysql_real_escape_string($conectar, $_POST ['apellido']);
$telefono =mysql_real_escape_string($conectar, $_POST ['telefono']);
$email =mysql_real_escape_string($conectar, $_POST ['email']);
$password =mysql_hash($POST['password'],PASSWORD_DEFAULT);


if(empty($nombre) || empty($apellido) || empty($areadetrabajo) || empty($usuario)||empty($contraseña) ){
    die("Falta datos por completar");

}


$sql="INSERT INTO usuario3(nombre, apellido,telefono, email,password)
VALUES ('$nombre'$apellido', '$telefono','$email', 'password')";
$resul = mysql_query($conectar, $sql)or trigger_error
("Query Failet! SQL - Error: " . mysql_error($conectar), E_USER_NOTICE);

echo "sql";

if ($resul){
    echo "Registro Existoso";
    //o redireccionar a otra pagina
    // header("Location: login.html);

}else{
    echo "Error al registrar";
}
?>