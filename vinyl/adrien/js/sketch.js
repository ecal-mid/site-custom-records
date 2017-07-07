var svg = document.getElementById('svg_main');
var radius  = parseInt(window.getComputedStyle(svg, null).getPropertyValue('width'));
var slider0 = document.getElementById('rangeMask0');
var slider1 = document.getElementById('rangeMask6');
mask0   = document.getElementById('maskpoly_4'),
mask0X1 = Math.cos(toRadians(slider1.value)) * radius,
mask0Y1 = Math.sin(toRadians(slider1.value)) * radius,
mask0X2 = Math.cos(toRadians(slider0.value)) * radius,
mask0Y2 = Math.sin(toRadians(slider0.value)) * radius;

mask0.points[0].x = radius/2;
mask0.points[0].y = radius/2;
mask0.points[1].x = radius/2 + mask0X1;
mask0.points[1].y = radius/2 + mask0Y1;
mask0.points[2].x = radius/2 + mask0X2;
mask0.points[2].y = radius/2 + mask0Y2;

slider0.addEventListener('input', function(e) {
    mask0X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask0Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask0.points[0].x = radius/2;
    mask0.points[0].y = radius/2;
    mask0.points[1].x = radius/2 + mask0X1;
    mask0.points[1].y = radius/2 + mask0Y1;
    mask0.points[2].x = radius/2 + mask0X2;
    mask0.points[2].y = radius/2 + mask0Y2;
}, false);

slider1.addEventListener('input', function(e) {
    mask0X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask0Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask0.points[0].x = radius/2;
    mask0.points[0].y = radius/2;
    mask0.points[1].x = radius/2 + mask0X1;
    mask0.points[1].y = radius/2 + mask0Y1;
    mask0.points[2].x = radius/2 + mask0X2;
    mask0.points[2].y = radius/2 + mask0Y2;
}, false);

// --------

var slider0 = document.getElementById('rangeMask0');
var slider1 = document.getElementById('rangeMask5');
mask4   = document.getElementById('maskpoly_8'),
mask4X1 = Math.cos(toRadians(slider1.value)) * radius,
mask4Y1 = Math.sin(toRadians(slider1.value)) * radius,
mask4X2 = Math.cos(toRadians(slider0.value)) * radius,
mask4Y2 = Math.sin(toRadians(slider0.value)) * radius;

mask4.points[0].x = radius/2;
mask4.points[0].y = radius/2;
mask4.points[1].x = radius/2 + mask4X1;
mask4.points[1].y = radius/2 + mask4Y1;
mask4.points[2].x = radius/2 + mask4X2;
mask4.points[2].y = radius/2 + mask4Y2;

slider0.addEventListener('input', function(e) {
    mask4X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask4Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask4.points[0].x = radius/2;
    mask4.points[0].y = radius/2;
    mask4.points[1].x = radius/2 + mask4X1;
    mask4.points[1].y = radius/2 + mask4Y1;
    mask4.points[2].x = radius/2 + mask4X2;
    mask4.points[2].y = radius/2 + mask4Y2;
}, false);

slider1.addEventListener('input', function(e) {
    mask4X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask4Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask4.points[0].x = radius/2;
    mask4.points[0].y = radius/2;
    mask4.points[1].x = radius/2 + mask4X1;
    mask4.points[1].y = radius/2 + mask4Y1;
    mask4.points[2].x = radius/2 + mask4X2;
    mask4.points[2].y = radius/2 + mask4Y2;
}, false);

// --------

var slider1 = document.getElementById('rangeMask2');
var slider2 = document.getElementById('rangeMask8');
mask2   = document.getElementById('maskpoly_2'),
mask2X1 = Math.cos(toRadians(slider2.value)) * radius,
mask2Y1 = Math.sin(toRadians(slider2.value)) * radius,
mask2X2 = Math.cos(toRadians(slider1.value)) * radius,
mask2Y2 = Math.sin(toRadians(slider1.value)) * radius;

mask2.points[0].x = radius/2;
mask2.points[0].y = radius/2;
mask2.points[1].x = radius/2 + mask2X1;
mask2.points[1].y = radius/2 + mask2Y1;
mask2.points[2].x = radius/2 + mask2X2;
mask2.points[2].y = radius/2 + mask2Y2;

slider1.addEventListener('input', function(e) {
    mask2X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask2Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask2.points[0].x = radius/2;
    mask2.points[0].y = radius/2;
    mask2.points[1].x = radius/2 + mask2X1;
    mask2.points[1].y = radius/2 + mask2Y1;
    mask2.points[2].x = radius/2 + mask2X2;
    mask2.points[2].y = radius/2 + mask2Y2;
}, false);

slider2.addEventListener('input', function(e) {
    mask2X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask2Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask2.points[0].x = radius/2;
    mask2.points[0].y = radius/2;
    mask2.points[1].x = radius/2 + mask2X1;
    mask2.points[1].y = radius/2 + mask2Y1;
    mask2.points[2].x = radius/2 + mask2X2;
    mask2.points[2].y = radius/2 + mask2Y2;
}, false);

// --------

var slider6 = document.getElementById('rangeMask2');
var slider7 = document.getElementById('rangeMask7');
mask8   = document.getElementById('maskpoly_0'),
mask8X1 = Math.cos(toRadians(slider7.value)) * radius,
mask8Y1 = Math.sin(toRadians(slider7.value)) * radius,
mask8X2 = Math.cos(toRadians(slider6.value)) * radius,
mask8Y2 = Math.sin(toRadians(slider6.value)) * radius;

mask8.points[0].x = radius/2;
mask8.points[0].y = radius/2;
mask8.points[1].x = radius/2 + mask8X1;
mask8.points[1].y = radius/2 + mask8Y1;
mask8.points[2].x = radius/2 + mask8X2;
mask8.points[2].y = radius/2 + mask8Y2;

slider6.addEventListener('input', function(e) {
    mask8X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask8Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask8.points[0].x = radius/2;
    mask8.points[0].y = radius/2;
    mask8.points[1].x = radius/2 + mask8X1;
    mask8.points[1].y = radius/2 + mask8Y1;
    mask8.points[2].x = radius/2 + mask8X2;
    mask8.points[2].y = radius/2 + mask8Y2;
}, false);

slider7.addEventListener('input', function(e) {
    mask8X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask8Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask8.points[0].x = radius/2;
    mask8.points[0].y = radius/2;
    mask8.points[1].x = radius/2 + mask8X1;
    mask8.points[1].y = radius/2 + mask8Y1;
    mask8.points[2].x = radius/2 + mask8X2;
    mask8.points[2].y = radius/2 + mask8Y2;
}, false);

// --------

var slider2 = document.getElementById('rangeMask3');
var slider3 = document.getElementById('rangeMask6');
mask3   = document.getElementById('maskpoly_6'),
mask3X1 = Math.cos(toRadians(slider3.value)) * radius,
mask3Y1 = Math.sin(toRadians(slider3.value)) * radius,
mask3X2 = Math.cos(toRadians(slider2.value)) * radius,
mask3Y2 = Math.sin(toRadians(slider2.value)) * radius;

mask3.points[0].x = radius/2;
mask3.points[0].y = radius/2;
mask3.points[1].x = radius/2 + mask3X1;
mask3.points[1].y = radius/2 + mask3Y1;
mask3.points[2].x = radius/2 + mask3X2;
mask3.points[2].y = radius/2 + mask3Y2;

slider2.addEventListener('input', function(e) {
    mask3X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask3Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask3.points[0].x = radius/2;
    mask3.points[0].y = radius/2;
    mask3.points[1].x = radius/2 + mask3X1;
    mask3.points[1].y = radius/2 + mask3Y1;
    mask3.points[2].x = radius/2 + mask3X2;
    mask3.points[2].y = radius/2 + mask3Y2;
}, false);

slider3.addEventListener('input', function(e) {
    mask3X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask3Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask3.points[0].x = radius/2;
    mask3.points[0].y = radius/2;
    mask3.points[1].x = radius/2 + mask3X1;
    mask3.points[1].y = radius/2 + mask3Y1;
    mask3.points[2].x = radius/2 + mask3X2;
    mask3.points[2].y = radius/2 + mask3Y2;
}, false);

// --------

var slider2 = document.getElementById('rangeMask3');
var slider3 = document.getElementById('rangeMask7');
mask7   = document.getElementById('maskpoly_5'),
mask7X1 = Math.cos(toRadians(slider3.value)) * radius,
mask7Y1 = Math.sin(toRadians(slider3.value)) * radius,
mask7X2 = Math.cos(toRadians(slider2.value)) * radius,
mask7Y2 = Math.sin(toRadians(slider2.value)) * radius;

mask7.points[0].x = radius/2;
mask7.points[0].y = radius/2;
mask7.points[1].x = radius/2 + mask7X1;
mask7.points[1].y = radius/2 + mask7Y1;
mask7.points[2].x = radius/2 + mask7X2;
mask7.points[2].y = radius/2 + mask7Y2;

slider2.addEventListener('input', function(e) {
    mask7X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask7Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask7.points[0].x = radius/2;
    mask7.points[0].y = radius/2;
    mask7.points[1].x = radius/2 + mask7X1;
    mask7.points[1].y = radius/2 + mask7Y1;
    mask7.points[2].x = radius/2 + mask7X2;
    mask7.points[2].y = radius/2 + mask7Y2;
}, false);

slider3.addEventListener('input', function(e) {
    mask7X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask7Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask7.points[0].x = radius/2;
    mask7.points[0].y = radius/2;
    mask7.points[1].x = radius/2 + mask7X1;
    mask7.points[1].y = radius/2 + mask7Y1;
    mask7.points[2].x = radius/2 + mask7X2;
    mask7.points[2].y = radius/2 + mask7Y2;
}, false);

// --------

var slider3 = document.getElementById('rangeMask4');
var slider4 = document.getElementById('rangeMask5');
mask5   = document.getElementById('maskpoly_7'),
mask5X1 = Math.cos(toRadians(slider4.value)) * radius,
mask5Y1 = Math.sin(toRadians(slider4.value)) * radius,
mask5X2 = Math.cos(toRadians(slider3.value)) * radius,
mask5Y2 = Math.sin(toRadians(slider3.value)) * radius;

mask5.points[0].x = radius/2;
mask5.points[0].y = radius/2;
mask5.points[1].x = radius/2 + mask5X1;
mask5.points[1].y = radius/2 + mask5Y1;
mask5.points[2].x = radius/2 + mask5X2;
mask5.points[2].y = radius/2 + mask5Y2;

slider3.addEventListener('input', function(e) {
    mask5X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask5Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask5.points[0].x = radius/2;
    mask5.points[0].y = radius/2;
    mask5.points[1].x = radius/2 + mask5X1;
    mask5.points[1].y = radius/2 + mask5Y1;
    mask5.points[2].x = radius/2 + mask5X2;
    mask5.points[2].y = radius/2 + mask5Y2;
}, false);

slider4.addEventListener('input', function(e) {
    mask5X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask5Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask5.points[0].x = radius/2;
    mask5.points[0].y = radius/2;
    mask5.points[1].x = radius/2 + mask5X1;
    mask5.points[1].y = radius/2 + mask5Y1;
    mask5.points[2].x = radius/2 + mask5X2;
    mask5.points[2].y = radius/2 + mask5Y2;
}, false);

// --------

var slider4 = document.getElementById('rangeMask4');
var slider5 = document.getElementById('rangeMask8');
mask6   = document.getElementById('maskpoly_3'),
mask6X1 = Math.cos(toRadians(slider5.value)) * radius,
mask6Y1 = Math.sin(toRadians(slider5.value)) * radius,
mask6X2 = Math.cos(toRadians(slider4.value)) * radius,
mask6Y2 = Math.sin(toRadians(slider4.value)) * radius;

mask6.points[0].x = radius/2;
mask6.points[0].y = radius/2;
mask6.points[1].x = radius/2 + mask6X1;
mask6.points[1].y = radius/2 + mask6Y1;
mask6.points[2].x = radius/2 + mask6X2;
mask6.points[2].y = radius/2 + mask6Y2;

slider4.addEventListener('input', function(e) {
    mask6X2 = Math.cos(toRadians(e.target.value)) * radius;
    mask6Y2 = Math.sin(toRadians(e.target.value)) * radius;

    mask6.points[0].x = radius/2;
    mask6.points[0].y = radius/2;
    mask6.points[1].x = radius/2 + mask6X1;
    mask6.points[1].y = radius/2 + mask6Y1;
    mask6.points[2].x = radius/2 + mask6X2;
    mask6.points[2].y = radius/2 + mask6Y2;
}, false);

slider5.addEventListener('input', function(e) {
    mask6X1 = Math.cos(toRadians(e.target.value)) * radius;
    mask6Y1 = Math.sin(toRadians(e.target.value)) * radius;

    mask6.points[0].x = radius/2;
    mask6.points[0].y = radius/2;
    mask6.points[1].x = radius/2 + mask6X1;
    mask6.points[1].y = radius/2 + mask6Y1;
    mask6.points[2].x = radius/2 + mask6X2;
    mask6.points[2].y = radius/2 + mask6Y2;
}, false);

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

window.addEventListener('resize', function() {
    radius = parseInt(window.getComputedStyle(svg, null).getPropertyValue('width'));

    mask0.points[0].x = radius/2;
    mask0.points[0].y = radius/2;
    mask0.points[1].x = radius/2 + mask0X1;
    mask0.points[1].y = radius/2 + mask0Y1;
    mask0.points[2].x = radius/2 + mask0X2;
    mask0.points[2].y = radius/2 + mask0Y2;

    mask4.points[0].x = radius/2;
    mask4.points[0].y = radius/2;
    mask4.points[1].x = radius/2 + mask4X1;
    mask4.points[1].y = radius/2 + mask4Y1;
    mask4.points[2].x = radius/2 + mask4X2;
    mask4.points[2].y = radius/2 + mask4Y2;

    mask2.points[0].x = radius/2;
    mask2.points[0].y = radius/2;
    mask2.points[1].x = radius/2 + mask2X1;
    mask2.points[1].y = radius/2 + mask2Y1;
    mask2.points[2].x = radius/2 + mask2X2;
    mask2.points[2].y = radius/2 + mask2Y2;

    mask8.points[0].x = radius/2;
    mask8.points[0].y = radius/2;
    mask8.points[1].x = radius/2 + mask8X1;
    mask8.points[1].y = radius/2 + mask8Y1;
    mask8.points[2].x = radius/2 + mask8X2;
    mask8.points[2].y = radius/2 + mask8Y2;

    mask3.points[0].x = radius/2;
    mask3.points[0].y = radius/2;
    mask3.points[1].x = radius/2 + mask3X1;
    mask3.points[1].y = radius/2 + mask3Y1;
    mask3.points[2].x = radius/2 + mask3X2;
    mask3.points[2].y = radius/2 + mask3Y2;

    mask7.points[0].x = radius/2;
    mask7.points[0].y = radius/2;
    mask7.points[1].x = radius/2 + mask7X1;
    mask7.points[1].y = radius/2 + mask7Y1;
    mask7.points[2].x = radius/2 + mask7X2;
    mask7.points[2].y = radius/2 + mask7Y2;

    mask5.points[0].x = radius/2;
    mask5.points[0].y = radius/2;
    mask5.points[1].x = radius/2 + mask5X1;
    mask5.points[1].y = radius/2 + mask5Y1;
    mask5.points[2].x = radius/2 + mask5X2;
    mask5.points[2].y = radius/2 + mask5Y2;

    mask6.points[0].x = radius/2;
    mask6.points[0].y = radius/2;
    mask6.points[1].x = radius/2 + mask6X1;
    mask6.points[1].y = radius/2 + mask6Y1;
    mask6.points[2].x = radius/2 + mask6X2;
    mask6.points[2].y = radius/2 + mask6Y2;
}, false);
