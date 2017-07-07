var selected = 0;
var couche2Displayed = false;
var couche3Displayed = false;
var timer = 0;
var animation = false;
var frame = 0;

//var canvas = createCanvas( window.innerWidth, window.innerHeight);
//canvas.parent('canvasContainer');


var check = document.getElementById("cart");
check.addEventListener("click", function(e) {
  alert("bought!");
}, false);

var cercleA = document.getElementById("cercleA");
cercleA.addEventListener("click", function(e) {
  selected = 1;
  imgIncremant = 0;
  cercleA.src = "imgs/cercle1.svg";
  cercleB.src = "imgs/cercle2.svg";
  cercleC.src = "imgs/cercle2.svg";
}, false);

var cercleB = document.getElementById("cercleB");
cercleB.addEventListener("click", function(e) {
  selected = 2;
  imgIncremant = 1;
  if (!couche2Displayed) {
    $('#couche2').toggle();
    couche2Displayed = true;
  }
  cercleA.src = "imgs/cercle2.svg";
  cercleB.src = "imgs/cercle1.svg";
  cercleC.src = "imgs/cercle2.svg";
}, false);

var cercleC = document.getElementById("cercleC");
cercleC.addEventListener("click", function(e) {
  selected = 3;
  imgIncremant = 2;
  if (!couche3Displayed) {
    $('#couche3').toggle();
    couche3Displayed = true;
  }
  cercleA.src = "imgs/cercle2.svg";
  cercleB.src = "imgs/cercle2.svg";
  cercleC.src = "imgs/cercle1.svg";
}, false);

/* */

var couche1 = document.getElementById("couche1");
var couche2 = document.getElementById("couche2");
var couche3 = document.getElementById("couche3");
var titre = document.getElementById("titre");
var drag = document.getElementById("drag");


var activeImage = null;
var imgIncremant = 0;
var offsetX = 0;
var offsetY = 0;

/*  */

var x = couche1.dataset.translationx; //pour initialiser la couche1
var y = couche1.dataset.translationy;
var rotation = couche1.dataset.rotation;
var scaleX = couche1.dataset.scalex;
var scaleX2;
var scaleX3;
var scaleY = couche1.dataset.scaley;

couche1.style.transform = "translate(" + x + "px, " + y + "px) translate(-50%, -50%) rotate(" + rotation + "deg) scale(" + scaleX + ", " + scaleY + ")";

/*  */

couche1.addEventListener("mousedown", function(e) {
    e.preventDefault(); //pas glisser l'image pour la copier (par défaux) = stop interaction
}, false);

couche2.addEventListener("mousedown", function(e) {
    e.preventDefault(); //pas glisser l'image pour la copier (par défaux) = stop interaction
}, false);

couche3.addEventListener("mousedown", function(e) {
    e.preventDefault(); //pas glisser l'image pour la copier (par défaux) = stop interaction
}, false);

titre.addEventListener("mousedown", function(e) {
    e.preventDefault(); //pas glisser l'image pour la copier (par défaux) = stop interaction
}, false);

drag.addEventListener("mousedown", function(e) {
    e.preventDefault(); //pas glisser l'image pour la copier (par défaux) = stop interaction
}, false);

// var container = document.getElementById('canvasContainer');
var newPosX,
    newPosY;
document.body.addEventListener("mousedown", function(e) {
    if (imgIncremant == 0) {
      activeImage = couche1;
    } else if (imgIncremant == 1){
      activeImage = couche2;
    } else {
      activeImage = couche3;
    }

    offsetX = activeImage.dataset.translationx - e.pageX;
    offsetY = activeImage.dataset.translationy - e.pageY;

    newPosX = activeImage.dataset.translationx;
    newPosY = activeImage.dataset.translationy;

}, false);

document.body.addEventListener("mousemove", function(e) {
  e.preventDefault();
  // console.log("coucou");
    if (activeImage != null) {
      newPosX = e.pageX + offsetX;
      newPosY = e.pageY + offsetY;
        // activeImage.dataset.translationx = e.pageX + offsetX;
        // activeImage.dataset.translationy = e.pageY + offsetY;
    }
}, false);

document.body.addEventListener("mouseup", function(e) {
  activeImage.dataset.translationx = newPosX;
  activeImage.dataset.translationy = newPosY;
  activeImage = null;
}, false);

function loop() {
  // console.log(activeImage);
    if(activeImage != null) {
      // x = activeImage.dataset.translationx; //pour récupérer les data
      // y = activeImage.dataset.translationy;
      scaleX = activeImage.dataset.scalex;
      activeImage.style.transform = "translate(" + newPosX + "px, " + newPosY + "px) translate(-50%, -50%) scale(" + scaleX + ", " + scaleX + ")"; //ce qui revient à translate(x-50%, y- 50%) rotate(rotation) scale(scaleX, scaleY)
      timer = 0;
    } else {
      timer++;
      // console.log(timer);
    }

    if (timer > 700) {
      animation = true;
      timer = 0;
    }
    // animateDrag();

    if (animation) animateDrag();
    requestAnimationFrame(loop);
}

loop();

window.onresize = function(event) {
    var largeur = window.innerWidth;
    timer = 0;
    if (imgIncremant == 0) {
      activeImage = couche2;
      activeImage.dataset.scalex = largeur/1000;
      var scaleX = activeImage.dataset.scalex;
      var x = activeImage.dataset.translationx; //pour récupérer les data
      var y = activeImage.dataset.translationy;
      activeImage.style.transform =  "translate(" + x + "px, " + y + "px) translate(-50%, -50%) scale(" + scaleX + ", " + scaleX + ")";
      activeImage = couche3;
      activeImage.dataset.scalex = largeur/1000;
    } else if (imgIncremant == 1){
      activeImage = couche1;
      activeImage.dataset.scalex = (largeur/100);
      var scaleX = activeImage.dataset.scalex;
      var x = activeImage.dataset.translationx; //pour récupérer les data
      var y = activeImage.dataset.translationy;
      activeImage.style.transform =  "translate(" + x + "px, " + y + "px) translate(-50%, -50%) scale(" + scaleX + ", " + scaleX + ")";
      activeImage = couche3;
      activeImage.dataset.scalex = largeur/1000;
    } else {
      activeImage = couche1;
      activeImage.dataset.scalex = (largeur/100);
      var scaleX = activeImage.dataset.scalex;
      var x = activeImage.dataset.translationx; //pour récupérer les data
      var y = activeImage.dataset.translationy;
      activeImage.style.transform =  "translate(" + x + "px, " + y + "px) translate(-50%, -50%) scale(" + scaleX + ", " + scaleX + ")";
      activeImage = couche2;
      activeImage.dataset.scalex = largeur/1000;
    }
    var scaleX = activeImage.dataset.scalex;
    var x = activeImage.dataset.translationx; //pour récupérer les data
    var y = activeImage.dataset.translationy;
    activeImage.style.transform =  "translate(" + x + "px, " + y + "px) translate(-50%, -50%) scale(" + scaleX + ", " + scaleX + ")";
    activeImage = null;
};

function animateDrag() {
  if (animation) {//frame++;
    document.getElementById("drag").src="imgs/drag4.gif";
    // console.log("hi");
    /*if (frame > 0)*/ animation = false;
  }
}
