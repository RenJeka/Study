<?php

include_once './model/apps.php';
$logDate = $_GET['date'];
$logs = file("logs/$logDate.txt");
?>

<table>
    <?foreach ($logs as $log) :?>
    <tr>

        <?
        // Если строка лога имеет в последним элементом слово "!warning!"— сделать для строки таблицы красную рамку
        if(checkForBadLog($log)):?>

            <td style="color:red"><?=$log?></td>
        <?else:?>
            <td><?=$log?></td>
        <?endif?>
    </tr>
    <?endforeach;?>
</table>
