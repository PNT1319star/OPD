<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Профессия</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="headerpage"></div>
    <div>
        <ul>
            <li><a href="index.html">Главная</a></li>
            <li><a href="list_expert.html">Эксперты</a></li>
            <li><a href="list_profess.php">Профессия</a>
        </ul>
    </div>
    <div class="sitplace"></div>
    <div class="listTema">
        <h1>Профессия</h1>
    </div>
    <hr/>
	<?php
	$link = mysqli_connect ("localhost", "root", "");
	if ($link) {
		echo "Соединение с сервером установлено", "<br>";
	} else {
		echo "Нет соединения с сервером";
	}
	$conn = new mysqli("localhost", "root", "");

	$db = "pvk";
	$query = "CREATE DATABASE IF NOT EXISTS $db";
	$conn->query($query);
	$conn->select_db($db);

	$table = "jobs";
	$conn->query("CREATE TABLE IF NOT EXISTS $table (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR (255) NOT NULL)");
	$result = $conn->query("SELECT * FROM $table WHERE name = 'Инженер Backend-разработчика'");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO $table (name) VALUES ('Инженер Backend-разработчика')";
		$conn->query($sql);
	}
	$result = $conn->query("SELECT * FROM $table WHERE name = 'Инженер-разработчик баз данных'");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO $table (name) VALUES ('Инженер-разработчик баз данных')";
		$conn->query($sql);
	}
	$result = $conn->query("SELECT * FROM $table WHERE name = 'Инженер по фронтенд-разработке'");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO $table (name) VALUES ('Инженер по фронтенд-разработке')";
		$conn->query($sql);
	}

	$table = "qualities";
	$conn->query("CREATE TABLE IF NOT EXISTS $table (id INT PRIMARY KEY AUTO_INCREMENT, 
	job_id INT NOT NULL, 
	memory INT NOT NULL, 
	effciency INT NOT NULL, 
	oral_skills INT NOT NULL, 
	prof_vocab INT NOT NULL, 
	creativity INT NOT NULL, 
	logic INT NOT NULL, 
	communication INT NOT NULL, 
	time_manag INT NOT NULL, 
	description VARCHAR (1024) NOT NULL, 
	FOREIGN KEY (job_id) REFERENCES jobs (id))");
	$result = $conn->query("SELECT * FROM $table WHERE job_id = 1");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO qualities(job_id, memory, effciency, oral_skills, prof_vocab, creativity, logic, communication, time_manag, description) VALUES (1, 70, 80, 60, 60, 40, 80, 70, 90, 'Острый взгляд на детали, способность координировать несколько задач, быть организованным и спланированным. Они также хороши в тайм-менеджменте и могут хорошо решать проблемы даже под давлением.')";
		$conn->query($sql);
	}
	$result = $conn->query("SELECT * FROM $table WHERE job_id = 2");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO qualities(job_id, memory, effciency, oral_skills, prof_vocab, creativity, logic, communication, time_manag, description) VALUES (2, 60, 70, 50, 60, 70, 70, 50, 50, 'Инженеры баз данных отвечают за эксплуатацию и обслуживание баз данных, включая основные задачи, такие как установка базы данных, мониторинг, резервное копирование и восстановление. Однако на самом деле нам также необходимо нести ответственность за весь жизненный цикл продукта: от проектирования спроса, тестирования до поставки и запуска. В этом процессе мы несем ответственность не только за создание, эксплуатацию и обслуживание базы данных управления. системы, но также участвовать в раннем проектировании базы данных и промежуточном тестировании базы данных, а также в управлении емкостью базы данных и оптимизации производительности.')";
		$conn->query($sql);
	}
	$result = $conn->query("SELECT * FROM $table WHERE job_id = 3");
	if($result->num_rows == 0) {
		$sql = "INSERT INTO qualities(job_id, memory, effciency, oral_skills, prof_vocab, creativity, logic, communication, time_manag, description) VALUES (3, 60, 60, 60, 60, 80, 30, 80, 50, 'Интерфейсному инженеру необходимо преобразовать проект проекта в веб-страницу и отправить данные, сгенерированные пользователем, на сервер. Ему также нужно, чтобы продакт-менеджер обсудил детали взаимодействия. Это требует от фронтенд-инженеров высоких навыков общения и понимания.')";
		$conn->query($sql);
	}

	$result = $conn->query("SELECT * FROM jobs");
	while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
		$j_id = (int)$row['id'];
		$j = $row['name'];
		$res = $conn->query("SELECT * FROM qualities WHERE id LIKE $j_id");
		while ($r = $res->fetch_array(MYSQLI_ASSOC)) {
		echo '<h2> Профессия: '.$j.'</h2>';
		echo '<p> Память: '.$r['memory'].'</p>';
		echo '<p> Эффективность: '.$r['effciency'].'</p>';
		echo '<p> Навыки устного выражения: '.$r['oral_skills'].'</p>';
		echo '<p> Профессиональный словарный запас: '.$r['prof_vocab'].'</p>';
		echo '<p> Креативность (гибкость, дивергенция, беглость мышления): '.$r['creativity'].'</p>';
		echo '<p> Способность к логическому рассуждению:: '.$r['logic'].'</p>';
		echo '<p> Коммуникабельность: '.$r['communication'].'</p>';
		echo '<p> Тайм-менеджмент: '.$r['time_manag'].'</p>';
		echo '<p>'.$r['description'].'</p>';
		}
	}
	?>
</body>
</html>