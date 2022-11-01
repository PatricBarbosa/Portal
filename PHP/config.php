<?php

$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "cadastro";

$conexao = new mysqli($dbhost, $dbusername, $dbpassword, $dbname)
if($conexao->errno){
    echo "erro";
} else {
    echo "conexao efetuada com sucesso!"
}

?>