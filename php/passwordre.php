<?php
 $host = "localhost";
 $dbUsername = "cap";
 $dbPassword = 'suan1854!';
 $dbName = "cap";
 

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $email = $_POST['email'];

    $stmt = $conn->prepare("SELECT pw FROM login WHERE id = ? AND email = ?");
    $stmt->bind_param("ss", $id, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $pw = $row['pw'];
        echo "<script>alert('당신의 비밀번호는 " . $pw . " 입니다.');location.href='http://localhost:3001/Login';</script>";
    } else {
        echo "<script>alert('아이디 또는 이메일이 잘못되었습니다.');history.back();</script>";
    }
}

$conn->close();
?>
