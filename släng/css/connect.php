<?php
/**
  * Open database
  */
$connect_error ="sorry, we are experiencing connection problems.";
$opendb= mysqli_connect('localhost','root','','loggreg')or die($connect_error);
mysqli_select_db($opendb,'loggreg')or die($connect_error);

 ?>
