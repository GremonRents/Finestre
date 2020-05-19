<?php

$target_dir = $_SERVER['DOCUMENT_ROOT']."/user/files/";
$target_file = $target_dir . basename($_FILES["upload"]["name"]);


if(move_uploaded_file($_FILES["upload"]["tmp_name"], $target_file))
    echo "Ok";
else
    echo $_FILES["upload"]["error"];



?>
