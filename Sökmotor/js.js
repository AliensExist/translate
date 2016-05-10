function search() {
  var vad = document.getElementById('here').value;
  var lowVad = vad.toLowerCase();

    var ljud = [["hej", "privet", "привет", "ljudfil", "ljudfilA"],
                ["nej", "net", "нет", "ljudfil1", "ljudfilB"],
                ["ja", "da", "да", "ljudfil2", "ljudfilC"],
                ["hjälp", "pomatch", "помощь", "ljudfil3", "ljudfilD"],
                ["varför", "patchemo", "почему", "ljudfil4", "ljudfilE"],
                ["potatis", "kartofel", "картофель", "ljudfil4", "ljudfilE"]
              ];

//var funkaDet = false;
  for (var i = 0; i < ljud.length; i++) {
      var a = ljud[i].indexOf(lowVad);

      /* Om den hittar ska den säga var den hitta. */
      if (a > -1) {
       //funkarDet = true;
       /* Gör till object som ska användas */
       function File(svname,arname,bokstavtext,svljud,arljud) {
         this.svname = svname;
         this.arname = arname;
         this.bokstavtext = bokstavtext;
         this.svljud = svljud;
         this.arljud = arljud;
       }
       var arraY = new File(ljud[i][0],ljud[i][1],ljud[i][2],ljud[i][3],ljud[i][4]);

       /* Skriva ut infon på sidan */
       var printAll = function (p) {
         var stronk = document.getElementById("platsen");
            if (a === 0) {
              stronk.innerHTML = stronk.innerHTML +
              "Svenska ordet: <strong>" + p.svname.cap1Letter()  +
              "</strong> Arabiska ordet: <strong>" + p.bokstavtext.cap1Letter() + " (" +  p.arname.cap1Letter()  + ")</strong><br>";
            } else {
             stronk.innerHTML = stronk.innerHTML +
             "Arabiska ordet: <strong>" + p.bokstavtext.cap1Letter() + "(" + p.arname.cap1Letter() + ")" +
             "</strong> Svenska ordet: <strong>" + p.svname.cap1Letter()  + "</strong><br>";
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
