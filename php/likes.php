<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$dbUsername = "kiwa1853";
$dbPassword = 'suan1854!';
$dbName = "cap";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}

if (!isset($_SESSION['id'])) {
    die("로그인이 필요합니다.");
}

$user_id = $_SESSION['id'];  // 로그인한 사용자의 ID
$post_id = $_POST['post_id'];  // 좋아요 버튼이 눌린 게시글의 ID

$stmt = $conn->prepare("SELECT * FROM likes WHERE user_id = ? AND post_id = ?");
$stmt->bind_param("ii", $user_id, $post_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $stmt = $conn->prepare("UPDATE likes SET like_status = NOT like_status WHERE user_id = ? AND post_id = ?");
} else {
    $stmt = $conn->prepare("INSERT INTO likes (user_id, post_id, like_status) VALUES (?, ?, 1)");
}

$stmt->bind_param("ii", $user_id, $post_id);
$stmt->execute();

$stmt = $conn->prepare("SELECT COUNT(*) FROM likes WHERE post_id = ? AND like_status = 1");
$stmt->bind_param("i", $post_id);
$stmt->execute();
$like_count = $stmt->get_result()->fetch_array()[0];

echo $like_count;

$conn->close();
?>