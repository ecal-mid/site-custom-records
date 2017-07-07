
var spacing = 50;
var depth = 400;
var margin = 50;
var radius = 5;
var img;
var view;
var blu = 0;

var tex;
var index = 7;

var mouse;
var lock = false;
var drag = false;
var coverClicked = false;
var easing = 0.05;

var camdist = 0;

var sliderPerspective = document.getElementById('sliderPerspectiveKnob');
var sliderZoom = document.getElementById('sliderZoomKnob');

function preload(){
  img = loadImage("imgs/typo/typo8_1.jpg");
}

function setup() {
  var canvas = createCanvas(500, 500, WEBGL);
  canvas.parent("canvasContainer");

  perspective(45, 1, 0.1, 3000);

  mouse = createVector(0, 0);
}

function draw() {
  camera(0,0,camdist)

  // background(0);

  ambientLight(255,255,255);
  pointLight(255, 255, 255, 0, 0, 0);
  rotateX(mouse.y/100-400);
  rotateY(mouse.x/100-400);
  texture(img);
  box(2200);
  specularMaterial(110,50,255);
  translate(-200,150,0);
  cone(100,300,64);
  translate(400,0,0);
  box(200);
  translate(-200,-400,0);
  sphere(150,64,64);
  // if (mouseX>0 && mouseX<600 && mouseY>0 && mouseY<600){
  changeView();
  // }
}

var sliderPersp = document.getElementById('sliderPerspective'),
    sliderPerspKnob = document.getElementById('sliderPerspectiveKnob'),
    sliderZoom = document.getElementById('sliderZoom'),
    sliderZoomKnob = document.getElementById('sliderZoomKnob'),
    changingZoom = false,
    changingPers = false;
sliderPerspKnob.addEventListener('mousedown', function(e) {
    console.log(e);
    changingPers = true;
    document.body.style.cursor = "default";
}, false);

sliderZoomKnob.addEventListener('mousedown', function(e) {
    console.log(e);
    changingZoom = true;
    document.body.style.cursor = "default";
}, false);

var changing = false;
document.body.addEventListener('mousemove', function(e) {
    var y = e.clientY;
    if(changing) {
      e.preventDefault();
    }
    if (changingZoom){
        lock = true;
        changing = true;
        if(y < sliderZoom.offsetTop - sliderZoom.offsetHeight / 2) y = 0;
        else if(y > sliderZoom.offsetTop + sliderZoom.offsetHeight / 2 - sliderZoomKnob.offsetHeight) y = sliderZoom.offsetHeight - sliderZoomKnob.offsetHeight;
        else y -= sliderZoom.offsetTop - sliderZoom.offsetHeight / 2;
        sliderZoomKnob.style.top = y + "px";
        camdist = map(y, 0, sliderZoom.offsetHeight, 0, 600);
    }
    if (changingPers){
        lock = true;
        changing = true;
        if(y < sliderPersp.offsetTop - sliderPersp.offsetHeight / 2) y = 0;
        else if(y > sliderPersp.offsetTop + sliderPersp.offsetHeight / 2 - sliderPerspKnob.offsetHeight) y = sliderPersp.offsetHeight - sliderPerspKnob.offsetHeight;
        else y -= sliderPersp.offsetTop - sliderPersp.offsetHeight / 2;
        sliderPerspKnob.style.top = y + "px";
        perspective(1 + y / (sliderPersp.offsetHeight / 2), 1, 0.01, 3000);
    }
}, false);

document.body.addEventListener('mouseup', function(e) {
    changing = false;
    changingZoom = false;
    changingPers = false;

    document.body.style.cursor = "auto";

    if (mouseX > 0 && mouseX < 500 && mouseY > 0 && mouseY < 500){
      lock = !lock;
    }
}, false);

function changeView() {
  if(lock==false) {
    mouse.x += (mouseX - mouse.x) * easing;
    mouse.y += (mouseY - mouse.y) * easing;
  }
}
