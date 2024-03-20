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

	$username = $_REQUEST['username'];
	$password =  $_REQUEST['password'];
	$result = $conn->query("SELECT * FROM $table_name WHERE username = '$username'");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO $table_name (username, pswd, state) VALUES ('$username', '$password', 'User')";
		$conn->query($sql);
		header('Location: ../reg_success.html');
	}
	else {
		header('Location: ../reg_unsuccess.html');
	}
	$conn->close();
?>