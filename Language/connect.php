<?php
/**
  * Open database
  */
$connect_error ="sorry, we are experiencing connection problems.";
$opendb= mysqli_connect('localhost','root','','translate')or die($connect_error);
mysqli_select_db($opendb,'translate')or die($connect_error);

 ?>
