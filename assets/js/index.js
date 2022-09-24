var indexCartiDeVizita = 0;
carouselCartiDeVizita();

function carouselCartiDeVizita() {
  var i;
  var x = document.getElementsByClassName("cartiDeVizita");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  indexCartiDeVizita++;
  if (indexCartiDeVizita > x.length) {indexCartiDeVizita = 1}    
  x[indexCartiDeVizita-1].style.display = "block";  
  setTimeout(carouselCartiDeVizita, 9000); // Change image every 2 seconds

}

var indexEtichete = 0;
carouselEtichete();
var i;
function carouselEtichete() {
var y = document.getElementsByClassName("etichete");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  indexEtichete++;
  if (indexEtichete > y.length) {indexEtichete = 1}    
  y[indexEtichete-1].style.display = "block";  
  setTimeout(carouselEtichete, 9000);
}

var indexEmbleme = 0;
carouselEmbleme();
var i;
function carouselEmbleme() {
var y = document.getElementsByClassName("embleme");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  indexEmbleme++;
  if (indexEmbleme > y.length) {indexEmbleme = 1}    
  y[indexEtichete-1].style.display = "block";  
  setTimeout(carouselEmbleme, 9000);
}

/* 
var indexEtichete = 0;
carouselEtichete();
var i;
function carouselEtichete() {
var y = document.getElementsByClassName("etichete");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  indexEtichete++;
  if (indexEtichete > y.length) {indexEtichete = 1}    
  y[indexEtichete-1].style.display = "block";  
  setTimeout(carouselEtichete, 9000);
}
*/