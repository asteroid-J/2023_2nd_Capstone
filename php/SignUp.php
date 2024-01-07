<?php
$host = "localhost";
$dbUsername = "cap";
$dbPassword = 'suan1854!';
$dbName = "cap";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}

$id = $_POST['id'];
$pw = $_POST['pw'];
$email = $_POST['email'];
$name = $_POST['name'];
$classnum = $_POST['classnum'];

 
if(empty($id)) {
    echo "<script>alert('아이디를 입력해주세요.');history.back();</script>";
    exit();
}

if(empty($pw)) {
    echo "<script>alert('비밀번호를 입력해주세요.');history.back();</script>";
    exit();
}

if(empty($email)) {
    echo "<script>alert('이메일을 입력해주세요.');history.back();</script>";
    exit();
}

if(empty($name)) {
    echo "<script>alert('이름을 입력해주세요.');history.back();</script>";
    exit();
}

if(empty($classnum)) {
    echo "<script>alert('클래스 번호를 입력해주세요.');history.back();</script>";
    exit();
}

$stmt = $conn->prepare("SELECT * FROM login WHERE id = ? AND pw = ?");
$stmt->bind_param("ss", $id, $pw);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "<script>alert('이미 존재하는 아이디와 패스워드입니다.');history.back();</script>";
    exit();
}

$stmt = $conn->prepare("INSERT INTO login (id, pw, email, name, classnum) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $id, $pw, $email, $name, $classnum);

if ($stmt->execute()) {
    echo "<script>alert('회원 가입이 완료되었습니다.');location.href='http://localhost:3001/Login';</script>";
} else {
    echo "<script>alert('오류: " . $stmt->error . "');history.back();</script>";
}

$conn->close();
?>
 
