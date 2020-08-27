<?php
	include_once('model/apps.php');
	$apps = getApps();

?>

<table border="1">
	<tr>
		<td>Date</td>
		<td>Name</td>
		<td>Phone</td>
	</tr>
	<? foreach ($apps as $app): ?>
	<tr>
		<td><?=$app['dt']?></td>
		<td><?=$app['name']?></td>
		<td><?=$app['phone']?></td>
	</tr>
	<? endforeach; ?>
</table>