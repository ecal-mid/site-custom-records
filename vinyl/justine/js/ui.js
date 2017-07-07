var buttonRotate1A = document.getElementById('button-rotate1A');
var imgRotation1A = document.getElementById('img1A');
var buttonRotate1B = document.getElementById('button-rotate1B');
var imgRotation1B = document.getElementById('img1B');
var buttonRotate1C = document.getElementById('button-rotate1C');
var imgRotation1C = document.getElementById('img1C');
var buttonRotate2A = document.getElementById('button-rotate2A');
var imgRotation2A = document.getElementById('img2A');
var buttonRotate2B = document.getElementById('button-rotate2B');
var imgRotation2B = document.getElementById('img2B');
var buttonRotate2C = document.getElementById('button-rotate2C');
var imgRotation2C = document.getElementById('img2C');
var buttonRotate3A = document.getElementById('button-rotate3A');
var imgRotation3A = document.getElementById('img3A');
var buttonRotate3B = document.getElementById('button-rotate3B');
var imgRotation3B = document.getElementById('img3B');
var buttonRotate3C = document.getElementById('button-rotate3C');
var imgRotation3C = document.getElementById('img3C');

// il va chercher l'id dans le document ou on a appelé la fonction

buttonRotate1A.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation1A.dataset.rotation = parseInt(imgRotation1A.dataset.rotation) + 90;
}, false);
buttonRotate1B.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation1B.dataset.rotation = parseInt(imgRotation1B.dataset.rotation) + 90;
}, false);
buttonRotate1C.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation1C.dataset.rotation = parseInt(imgRotation1C.dataset.rotation) + 90;
}, false);
buttonRotate2A.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation2A.dataset.rotation = parseInt(imgRotation2A.dataset.rotation) + 90;
}, false);
buttonRotate2B.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation2B.dataset.rotation = parseInt(imgRotation2B.dataset.rotation) + 90;
}, false);
buttonRotate2C.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation2C.dataset.rotation = parseInt(imgRotation2C.dataset.rotation) + 90;
}, false);
buttonRotate3A.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation3A.dataset.rotation = parseInt(imgRotation3A.dataset.rotation) + 90;
}, false);
buttonRotate3B.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation3B.dataset.rotation = parseInt(imgRotation3B.dataset.rotation) + 90;
}, false);
buttonRotate3C.addEventListener("click", function(e) { //écouteurs d'événements
	imgRotation3C.dataset.rotation = parseInt(imgRotation3C.dataset.rotation) + 90;
}, false);

function loop() {
    if(imgRotation1A != null) {
        var rotation = imgRotation1A.dataset.rotation;
        imgRotation1A.style.transform = "rotate(" + rotation + "deg) ";
    }
		if(imgRotation1B != null) {
        var rotation = imgRotation1B.dataset.rotation;
        imgRotation1B.style.transform = "rotate(" + rotation + "deg) ";
    }
		if(imgRotation1C != null) {
        var rotation = imgRotation1C.dataset.rotation;
        imgRotation1C.style.transform = "rotate(" + rotation + "deg) ";
    }
		if(imgRotation2A != null) {
        var rotation = imgRotation2A.dataset.rotation;
        imgRotation2A.style.transform = "rotate(" + rotation + "deg) ";
    }
		if(imgRotation2B != null) {
				var rotation = imgRotation2B.dataset.rotation;
				imgRotation2B.style.transform = "rotate(" + rotation + "deg) ";
		}
		if(imgRotation2C != null) {
				var rotation = imgRotation2C.dataset.rotation;
				imgRotation2C.style.transform = "rotate(" + rotation + "deg) ";
		}
		if(imgRotation3A != null) {
				var rotation = imgRotation3A.dataset.rotation;
				imgRotation3A.style.transform = "rotate(" + rotation + "deg) ";
		}
		if(imgRotation3B != null) {
				var rotation = imgRotation3B.dataset.rotation;
				imgRotation3B.style.transform = "rotate(" + rotation + "deg) ";
		}
		if(imgRotation3C != null) {
				var rotation = imgRotation3C.dataset.rotation;
				imgRotation3C.style.transform = "rotate(" + rotation + "deg) ";
		}
		requestAnimationFrame(loop);
}

loop();
