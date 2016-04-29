<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>

      </button>
      <!-- loggo bild -->
      <img src="pictures/redbaronv2.png" class="loggoicon">
      <a class="navbar-brand" href="#">RedBaron</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a href="index.php">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="blogs.php">Blogs</a></li>

<?php
if(isset($_SESSION['user_id'])){
  echo '<li><a href="userhome.php">Userhome</a></li>';
}

if(isset($_SESSION['user_id'])){
  echo '<li><a href="userpage.php">New Post</a></li>';
}

if(isset($_SESSION['user_id'])){
  echo '<li><a href="logout.php">Logout</a></li>';
}else{
echo '<li><a href="login.php">Login</a></li>';
}
?>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li class="dropdown-header">Nav header</li>
            <li><a href="#">Separated link</a></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>

<div class="container theme-showcase" role="main">
