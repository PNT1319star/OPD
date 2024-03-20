<?php
	$conn = new mysqli("localhost", "root", "");
	$db = "users";
	$query = "CREATE DATABASE IF NOT EXISTS $db";
	$conn->query($query);
	
	$conn->select_db($db);
	
	$table_name = "user_data";
	$query_table = "CREATE TABLE IF NOT EXISTS $table_name (id INT PRIMARY KEY AUTO_INCREMENT, username VARCHAR (255) NOT NULL, pswd VARCHAR (255) NOT NULL, state VARCHAR (255) NOT NULL)";
	$conn->query($query_table);
	$result = $conn->query("SELECT * FROM $table_name WHERE username = 'kami'");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO $table_name (username, pswd, state) VALUES ('kami', 'kami', 'Admin')";
		$conn->query($sql);
	}
	
	session_start();
	if (isset($_POST['username'])) {
		$username = stripslashes($_REQUEST['username']);    // removes backslashes
        $username = mysqli_real_escape_string($conn, $username);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($conn, $password);
		$query = "SELECT * FROM user_data WHERE username = '$username' AND pswd = '$password'";
		$result = mysqli_query($conn, $query) or die(mysql_error());
		$rows = mysqli_num_rows($result);
		if ($rows == 1) {
			$_SESSION['username'] = $username;
			header("Location: ./login_success.php");
		}
		else {
			header("Location: ../login_unsuccess.html");
		}
	}
	else {
		header("Location: ../unexpected_error.html");
	}
	$conn->close();
?>