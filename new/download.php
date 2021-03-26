<?php
if(isset($_GET['f']))
{
    // $_GET['f'] 即為傳入要下載檔名的引數
    header("Content-type:application");
    header("Content-Length: " .(string)(filesize($_GET['f'])));
    header("Content-Disposition: attachment; filename=".$_GET['f']);
    readfile($_GET['f']);
}
?>