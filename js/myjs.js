/* funktionen som visar Månaderna när dem är hidden*/
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
    var november = '<audio controls><source src="audio/månaderna/12november.mp3" type="audio/mpeg"></audio>';
    var december = '<audio controls><source src="audio/månaderna/13december.mp3" type="audio/mpeg"></audio>';
    var januari = '<audio controls><source src="audio/månaderna/02januari.mp3" type="audio/mpeg"></audio>';
    document.getElementById("audioshow").innerHTML = '<p>November</p>' + november + '<br>' + '<p>December</p>' + december + '<p>Januari</p>' + januari;
});

/*funktionen för siffrorna*/
$("#numb1").click(function(){
  $(".audioshow").show();
  var noll = '<audio controls><source src="audio/Siffror/0.mp3" type="audio/mpeg"></audio>';
  var ett = '<audio controls><source src="audio/Siffror/1.mp3" type="audio/mpeg"></audio>';
  var två = '<audio controls><source src="audio/Siffror/2.mp3" type="audio/mpeg"></audio>';
  var tre = '<audio controls><source src="audio/Siffror/3.mp3" type="audio/mpeg"></audio>';
  var fyra = '<audio controls><source src="audio/Siffror/4.mp3" type="audio/mpeg"></audio>';
  var fem = '<audio controls><source src="audio/Siffror/5.mp3" type="audio/mpeg"></audio>';
  var sex = '<audio controls><source src="audio/Siffror/6.mp3" type="audio/mpeg"></audio>';
  var sju = '<audio controls><source src="audio/Siffror/7.mp3" type="audio/mpeg"></audio>';
  var åtta = '<audio controls><source src="audio/Siffror/8.mp3" type="audio/mpeg"></audio>';
  var nio = '<audio controls><source src="audio/Siffror/9.mp3" type="audio/mpeg"></audio>';
  var tio = '<audio controls><source src="audio/Siffror/10.mp3" type="audio/mpeg"></audio>';

  var korp = '<br>' + '<p>6 = Sex</p>' + sex + '<br>' + '<p>7 = Sju</p>' + sju + '<br>' + '<p>8 = Åtta</p>' + åtta + '<br>' + '<p>9 = Nio</p>' + nio + '<br>' + '<p>10 = Tio </p>' + tio;
  document.getElementById("audioshow").innerHTML = '<p>0 = Noll</p>' + noll + '<br>' + '<p>1 = Ett</p>' + ett + '<br>' + '<p>2 = Två</p>' + två + '<br>' + '<p>3 = Tre</p>' + tre + '<br>' + '<p>4 = Fyra</p>' + fyra + '<br>' + '<p>5 = Fem</p>' + fem + '<br>' + '<p>6 = Sex</p>' + sex + '<br>' + '<p>7 = Sju</p>' + sju + '<br>' + '<p>8 = Åtta</p>' + åtta + '<br>' + '<p>9 = Nio</p>' + nio + '<br>' + '<p>10 = Tio </p>' + tio;
});

$("#numb2").click(function(){
  $(".audioshow").show();
  var elva = '<audio controls><source src="audio/Siffror/11.mp3" type="audio/mpeg"></audio>';
  var tolv = '<audio controls><source src="audio/Siffror/12.mp3" type="audio/mpeg"></audio>';
  var tretton = '<audio controls><source src="audio/Siffror/13.mp3" type="audio/mpeg"></audio>';
  var fjorton = '<audio controls><source src="audio/Siffror/14.mp3" type="audio/mpeg"></audio>';
  var femton = '<audio controls><source src="audio/Siffror/15.mp3" type="audio/mpeg"></audio>';
  document.getElementById("audioshow").innerHTML = '<p>11 = Elva</p>' + elva + '<br>' + '<p>12 = Tolv</p>' + tolv + '<p>13 = Tretton</p>' + tretton + '<br>' + '<p>14 = Fjorton</p>' + fjorton + '<p>15 = Femton</p>' + femton;
});

$("#numb3").click(function(){
   $(".audioshow").show();
  var tjugo = '<audio controls><source src="audio/Siffror/20.mp3" type="audio/mpeg"></audio>';
  var trettio = '<audio controls><source src="audio/Siffror/30.mp3" type="audio/mpeg"></audio>';
  var fyrtio = '<audio controls><source src="audio/Siffror/40.mp3" type="audio/mpeg"></audio>';
  var femtio = '<audio controls><source src="audio/Siffror/50.mp3" type="audio/mpeg"></audio>';
  document.getElementById("audioshow").innerHTML = '<p>20 = Tjugo</p>' + tjugo + '<br>' + '<p>30 = Trettio</p>' + trettio + '<p>40 = Fyrtio</p>' + fyrtio + '<br>' + '<p>50 = Femtio</p>' + femtio;
});

$("#numb4").click(function(){
  $(".audioshow").show();
  var sextio = '<audio controls><source src="audio/Siffror/60.mp3" type="audio/mpeg"></audio>';
  var sjuttio = '<audio controls><source src="audio/Siffror/70.mp3" type="audio/mpeg"></audio>';
  var åttio = '<audio controls><source src="audio/Siffror/80.mp3" type="audio/mpeg"></audio>';
  var nittio = '<audio controls><source src="audio/Siffror/90.mp3" type="audio/mpeg"></audio>';
  var hundra= '<audio controls><source src="audio/Siffror/100.mp3" type="audio/mpeg"></audio>';
  document.getElementById("audioshow").innerHTML = '<p>60 = Sextio</p>' + sextio + '<br>' + '<p>70 = Sjuttio</p>' + sjuttio + '<p>80 = Åttio</p>' + åttio + '<br>' + '<p>90 = Nittio</p>' + nittio + '<br>' + '<p>100 = Hundra</p>' + hundra;
});
