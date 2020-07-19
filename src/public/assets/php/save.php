<?php
    $date = date("Y.m.d H:i:s");
    $source = $_POST['source'];
    $phone = $_POST['phone'];

    if($_POST['name']){
        $name = $_POST['name'];
        $value = $source."\n".$date."\n".$name."\n".$phone."\n \n";
    }else{
        $value = $source."\n".$date."\n".$phone."\n \n";
    }


    $file = fopen("data.txt", "a");
    fwrite($file, $value);
    fclose($file);
?> 