<?php
    include("./auth_session.php");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Registration page</title>
<link rel="stylesheet" href="../style.css" />
<link rel="stylesheet" href="../css/reg_form_style.css" />
</head>
<body>
<div class="headerpage"></div>
    <div>
        <ul>
            <li><a href="index.html">Main.page</a></li>
            <li><a href="list_expert.html">Эксперты</a></li>
            <li><a href="list_profess.php">Профессия</a>
        </ul>
    </div>
    <div class="sitplace"></div>
<h1>Registration</h1>
<hr/>
<div class="button_menu">
    <a href="../test.html" class="b1">Test</a>
    <a href="../index.html" class="b1">Main</a>
</div>
<hr/>
<div>
<h2>Успешно! Текущий сеанс: <?php echo $_SESSION['username'];?></h2>
<h2><a href="./logout.php">Logout</a></h2>
</div>
</body>
</html>