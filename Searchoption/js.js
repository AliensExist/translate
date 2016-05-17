function search() {
  var vad = document.getElementById('here').value;
  var lowVad = vad.toLowerCase();

    var ljud = [["månaderna", "armånaderna", "<audio controls><source src='audio/månaderna/01manader.mp3' type='audio/mpeg'></audio>"],
                ["februari", "arfebruari", "<audio controls><source src='audio/månaderna/03februari.mp3' type='audio/mpeg'></audio>"],
                ["mars", "armars", "<audio controls><source src='audio/månaderna/04mars.mp3' type='audio/mpeg'></audio>"],
                ["april", "arapril", "<audio controls><source src='audio/månaderna/05april.mp3' type='audio/mpeg'></audio>"],
                ["maj", "armaj", "<audio controls><source src='audio/månaderna/06maj.mp3' type='audio/mpeg'></audio>"],
                ["juni", "arjuni", "<audio controls><source src='audio/månaderna/07juni.mp3' type='audio/mpeg'></audio>"],
                ["juli", "arjuli", "<audio controls><source src='audio/månaderna/08juli.mp3' type='audio/mpeg'></audio>"],
                ["augusti", "araugusti", "<audio controls><source src='audio/månaderna/09augusti.mp3' type='audio/mpeg'></audio>"],
                ["september", "arseptember", "<audio controls><source src='audio/månaderna/10september.mp3' type='audio/mpeg'></audio>"],
                ["oktober", "aroktober", "<audio controls><source src='audio/månaderna/11oktober.mp3' type='audio/mpeg'></audio>"]
              ];

//var funkaDet = false;
  for (var i = 0; i < ljud.length; i++) {
      var a = ljud[i].indexOf(lowVad);

      /* Om den hittar ska den säga var den hitta. */
      if (a > -1) {
       //funkarDet = true;
       /* Gör till object som ska användas */
       function File(svname,arname,ljud) {
         this.svname = svname;
         this.arname = arname;
         this.ljud = ljud;
       }
       var arraY = new File(ljud[i][0],ljud[i][1],ljud[i][2]);

       /* Skriva ut infon på sidan */
       var printAll = function (p) {
         var stronk = document.getElementById("platsen");
            if (a === 0) {
              stronk.innerHTML = stronk.innerHTML +
              "Svenska ordet: <strong>" + p.svname.cap1Letter()  +
              "</strong> Arabiska ordet: <strong>" +  p.arname.cap1Letter()  + "</strong><br>" + p.ljud;
            } else {
             stronk.innerHTML = stronk.innerHTML +
             "Arabiska ordet: <strong>" + p.arname.cap1Letter() +
             "</strong> Svenska ordet: <strong>" + p.svname.cap1Letter()  + "</strong><br>" + p.ljud;
           }
       };
       printAll(arraY);
       /* Hittar den inte skriv: */
     } else {
       //if(funkarDet === false) console.log("Hallå");
       //else
       console.log("Damn this");
      }
  }
}

/* Ta bort text ur input */
function textClear(element)
{ if ( element.value != '' ){
      element.value = '';
  }
}

/* Convertera svarsorden till första bokstaven uppercase */
String.prototype.cap1Letter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/* Enter klickar på knappen*/
function runScript(e) {
    if (e.keyCode == 13) {
          document.getElementById('Den').click();
    }
}
