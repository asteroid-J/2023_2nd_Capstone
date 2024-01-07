<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  
session_start();

if (isset($_SESSION['username'])) {
    echo json_encode(['username' => $_SESSION['username']]);
} else {
    echo json_encode(['username' => '']);
}
?>
