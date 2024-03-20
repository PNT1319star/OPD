<?php
$conn = new mysqli("localhost", "root", "");

$db = "pvk";

$conn->select_db($db);

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