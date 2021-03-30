<?php

$DB = array(
    "HOST" => 'localhost',
    "USER" => 'root',
    "PASS" => '',
    "NAME" => 'cryptospace'
);
//
//$DB = array(
//    "HOST" => 'localhost',
//    "USER" => 'cryptosp_students',
//    "PASS" => 'Combination@1234',
//    "NAME" => 'cryptosp_students'
//);

$Crypto = mysqli_connect($DB['HOST'], $DB['USER'], $DB['PASS'], $DB['NAME']);
