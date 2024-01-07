<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <title>환영 페이지</title>
</head>
<body>
    <?php
    if (isset($_SESSION['username'])) {
        echo "<h1>환영합니다, " . $_SESSION['username'] . "님!</h1>";
    } else {
        echo "<h1>로그인이 필요합니다.</h1>";
    }
    ?>
    <a href='welcometo.php'>이동하기</a>
    <a href='logout.php'>로그아웃</a>
</body>
</html>
