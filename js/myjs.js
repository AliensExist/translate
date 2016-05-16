$("#mon1").click(function(){
    $(".audioshow").show();
    var manader = '<audio controls><source src="audio/månaderna/01manader.mp3" type="audio/mpeg"></audio>';
    var februari = '<audio controls><source src="audio/månaderna/03februari.mp3" type="audio/mpeg"></audio>';
    var mars = '<audio controls><source src="audio/månaderna/04mars.mp3" type="audio/mpeg"></audio>';
    var april = '<audio controls><source src="audio/månaderna/05april.mp3" type="audio/mpeg"></audio>';
      var maj = '<audio controls><source src="audio/månaderna/06maj.mp3" type="audio/mpeg"></audio>';
    document.getElementById("audioshow").innerHTML = '<p>Februari</p>' + februari + '<br>' + '<p>Mars</p>' + mars + '<br>' + '<p>April</p>' + april + '<br>' + '<p>Maj</p>' + maj ;
});
$("#mon2").click(function(){
  $(".audioshow").show();
  var juni = '<audio controls><source src="audio/månaderna/07juni.mp3" type="audio/mpeg"></audio>';
  var juli = '<audio controls><source src="audio/månaderna/08juli.mp3" type="audio/mpeg"></audio>';
  var augusti = '<audio controls><source src="audio/månaderna/09augusti.mp3" type="audio/mpeg"></audio>';
  document.getElementById("audioshow").innerHTML = '<p>Juni</p>' + juni + '<br>' + '<p>Juli</p>' + juli + '<br>' + '<p>Augusti</p>' + augusti ;
});

$("#mon3").click(function(){
  $(".audioshow").show();
  var september = '<audio controls><source src="audio/månaderna/10september.mp3" type="audio/mpeg"></audio>';
  var oktober = '<audio controls><source src="audio/månaderna/11oktober.mp3" type="audio/mpeg"></audio>';
  document.getElementById("audioshow").innerHTML = '<p>September</p>' + september + '<br>' + '<p>Oktober</p>' + oktober;
});


  $("#mon4").click(function(){
    $(".audioshow").show();
    var november = '<audio controls><source src="audio/månaderna/11november.mp3" type="audio/mpeg"></audio>';
    var december = '<audio controls><source src="audio/månaderna/12december.mp3" type="audio/mpeg"></audio>';
    var januari = '<audio controls><source src="audio/månaderna/02januari.mp3" type="audio/mpeg"></audio>';
    document.getElementById("audioshow").innerHTML = '<p>November</p>' + november + '<br>' + '<p>December</p>' + december + '<p>Januari</p>' + januari;
});
