<?php
session_start();

$host = "localhost";
$dbUsername = "root";
$dbPassword = '1234';
$dbName = "cap";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $pw = $_POST['pw'];

    $stmt = $conn->prepare("SELECT * FROM login WHERE id = ? AND pw = ?");
    $stmt->bind_param("ss", $id, $pw);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $_SESSION['id'] = $row['id'];  // 사용자의 아이디를 세션에 저장
        $_SESSION['username'] = $row['name'];  // 사용자의 이름을 세션에 저장
        echo "<script>alert('로그인 성공!');location.href='http://localhost:3001/Recommend';</script>";
    } else {
        echo "<script>alert('아이디 또는 비밀번호가 잘못되었습니다.');history.back();</script>";
    }
}
?>