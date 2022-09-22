<?php
    $host = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "full-stack";

    $link = mysqli_connect($host, $userName, $password, $dbName);
    mysqli_set_charset($link, "utf8");

    $result = mysqli_query($link, "SELECT * FROM `articles`");

    $arr = [];

    while ($obj = mysqli_fetch_assoc($result)) {
        $arr[] = $obj;
    }

    echo json_encode($arr);


?>