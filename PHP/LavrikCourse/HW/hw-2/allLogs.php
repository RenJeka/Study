<?php
include_once('model/apps.php');
$allLogs = getAllLogs();


?>

<table>
    <thead>
        <tr>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
    <? foreach ($allLogs as $dayLog): ?>
        <tr>
            <td>
                <a href="dailyLogs.php?date=<?=$dayLog?>"><?=$dayLog?></a>
            </td>
        </tr>
    <?endforeach;?>
    </tbody>
</table>
