//tools
  var input1A = document.getElementById('input1A');
  var rotation1A = document.getElementById('button-rotate1A');
  var dragme1A = document.getElementById('dragme1A');

  var input1B = document.getElementById('input1B');
  var rotation1B = document.getElementById('button-rotate1B');
  var dragme1B = document.getElementById('dragme1B');

  var input1C = document.getElementById('input1C');
  var rotation1C = document.getElementById('button-rotate1C');
  var dragme1C = document.getElementById('dragme1C');
  var input2A = document.getElementById('input2A');
  var rotation2A = document.getElementById('button-rotate2A');
  var dragme2A = document.getElementById('dragme2A');
  var input2B = document.getElementById('input2B');
  var rotation2B = document.getElementById('button-rotate2B');
  var dragme2B = document.getElementById('dragme2B');
  var input2C = document.getElementById('input2C');
  var rotation2C = document.getElementById('button-rotate2C');
  var dragme2C = document.getElementById('dragme2C');
  var input3A = document.getElementById('input3A');
  var rotation3A = document.getElementById('button-rotate3A');
  var dragme3A = document.getElementById('dragme3A');
  var input3B = document.getElementById('input3B');
  var rotation3B = document.getElementById('button-rotate3B');
  var dragme3B = document.getElementById('dragme3B');
  var input3C = document.getElementById('input3C');
  var rotation3C = document.getElementById('button-rotate3C');
  var dragme3C = document.getElementById('dragme3C');

// container for the images
  var box1A = document.getElementById('box1A');
  var box1B = document.getElementById('box1B');
  var box1C = document.getElementById('box1C');
  var box2A = document.getElementById('box2A');
  var box2B = document.getElementById('box2B');
  var box2C = document.getElementById('box2C');
  var box3A = document.getElementById('box3A');
  var box3B = document.getElementById('box3B');
  var box3C = document.getElementById('box3C');


  // array of images
  var images1A = [];
  var images1B = [];
  var images1C = [];
  var images2A = [];
  var images2B = [];
  var images2C = [];
  var images3A = [];
  var images3B = [];
  var images3C = [];

  // create image tags 1A
  for (var i = 0; i < 26; i++) {
    var image1A = document.createElement('img');
    image1A.src = 'img_code2/' + i + '.png';
    image1A.class = "box";
    if(i != 0) image1A.style.display = 'none';
    box1A.appendChild(image1A);
    images1A.push(image1A);
  }
    // create image tags 1B
  for (var i = 0; i < 26; i++) {
    var image1B = document.createElement('img');
    image1B.src = 'img_code2/' + i + '.png';
    image1B.class = "box";
    if(i != 0) image1B.style.display = 'none';
    box1B.appendChild(image1B);
    images1B.push(image1B);
  }
  // create image tags 1C
  for (var i = 0; i < 26; i++) {
    var image1C = document.createElement('img');
    image1C.src = 'img_code2/' + i + '.png';
    image1C.class = "box";
    if(i != 0) image1C.style.display = 'none';
    box1C.appendChild(image1C);
    images1C.push(image1C);
  }
  // create image tags 2A
  for (var i = 0; i < 26; i++) {
    var image2A = document.createElement('img');
    image2A.src = 'img_code2/' + i + '.png';
    image2A.class = "box";
    if(i != 0) image2A.style.display = 'none';
    box2A.appendChild(image2A);
    images2A.push(image2A);
  }
  // create image tags 2B
  for (var i = 0; i < 26; i++) {
    var image2B = document.createElement('img');
    image2B.src = 'img_code2/' + i + '.png';
    image2B.class = "box";
    if(i != 0) image2B.style.display = 'none';
    box2B.appendChild(image2B);
    images2B.push(image2B);
  }
  // create image tags 2C
  for (var i = 0; i < 26; i++) {
    var image2C = document.createElement('img');
    image2C.src = 'img_code2/' + i + '.png';
    image2C.class = "box";
    if(i != 0) image2C.style.display = 'none';
    box2C.appendChild(image2C);
    images2C.push(image2C);
  }
  // create image tags 3A
  for (var i = 0; i < 26; i++) {
    var image3A = document.createElement('img');
    image3A.src = 'img_code2/' + i + '.png';
    image3A.class = "box";
    if(i != 0) image3A.style.display = 'none';
    box3A.appendChild(image3A);
    images3A.push(image3A);
  }
  // create image tags 3B
  for (var i = 0; i < 26; i++) {
    var image3B = document.createElement('img');
    image3B.src = 'img_code2/' + i + '.png';
    image3B.class = "box";
    if(i != 0) image3B.style.display = 'none';
    box3B.appendChild(image3B);
    images3B.push(image3B);
  }
  // create image tags 3C
  for (var i = 0; i < 26; i++) {
    var image3C = document.createElement('img');
    image3C.src = 'img_code2/' + i + '.png';
    image3C.class = "box";
    if(i != 0) image3C.style.display = 'none';
    box3C.appendChild(image3C);
    images3C.push(image3C);
  }

  function keyCode(event, index, self) {
    if(event.keyCode - 65 >= 26) return;
    console.log(self);
    self.value = "";
  //------------------- 1A
  // reset images
    if(index == 0) {
      for (var i = 0; i < images1A.length; i++) {
        images1A[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images1A[x].style.display = "block";
    }
    if(index == 1) {
      //------------------- 1B
      // reset images
      for (var i = 0; i < images1B.length; i++) {
        images1B[i].style.display = "none";
      }

      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images1B[x].style.display = "block";
    }
    if(index == 2) {
      //------------------- 1C
      input1C.text = event.key; // rechercher pour trouver le bon truc à remplacer
      // reset images
      for (var i = 0; i < images1C.length; i++) {
        images1C[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images1C[x].style.display = "block";
    }
    if(index == 3) {
      //------------------- 2A
      // reset images
      for (var i = 0; i < images2A.length; i++) {
        images2A[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images2A[x].style.display = "block";
    }
    if(index == 4) {
      //------------------- 2B
      // reset images
      for (var i = 0; i < images2B.length; i++) {
        images2B[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images2B[x].style.display = "block";
    }
    if(index == 5) {
      //------------------- 2C
      // reset images
      for (var i = 0; i < images2C.length; i++) {
        images2C[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images2C[x].style.display = "block";
    }
    if(index == 6) {
      //------------------- 3A
      // reset images
      for (var i = 0; i < images3A.length; i++) {
        images3A[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images3A[x].style.display = "block";
    }
    if(index == 7) {
      //------------------- 3B
      // reset images
      for (var i = 0; i < images3B.length; i++) {
        images3B[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images3B[x].style.display = "block";
    }
    if(index == 8) {
      //------------------- 3C
      // reset images
      for (var i = 0; i < images3C.length; i++) {
        images3C[i].style.display = "none";
      }
      // show image that matches the key pressed
      var x = event.keyCode - 65;
      images3C[x].style.display = "block";
    }
  }
//----------


input1A.style.display = "none";
rotation1A.style.display = "none";
dragme1A.style.display = "none";
input1B.style.display = "none";
rotation1B.style.display = "none";
dragme1B.style.display = "none";
input1C.style.display = "none";
rotation1C.style.display = "none";
dragme1C.style.display = "none";
input2A.style.display = "none";
rotation2A.style.display = "none";
dragme2A.style.display = "none";
input2B.style.display = "none";
rotation2B.style.display = "none";
dragme2B.style.display = "none";
input2C.style.display = "none";
rotation2C.style.display = "none";
dragme2C.style.display = "none";
input3A.style.display = "none";
rotation3A.style.display = "none";
dragme3A.style.display = "none";
input3B.style.display = "none";
rotation3B.style.display = "none";
dragme3B.style.display = "none";
input3C.style.display = "none";
rotation3C.style.display = "none";
dragme3C.style.display = "none";

function hideTools(index){
  if(index == 0){
    input1A.style.display = "none";
    rotation1A.style.display = "none";
    dragme1A.style.display = "none";
  }
  if(index == 1){
      input1B.style.display = "none";
      rotation1B.style.display = "none";
      dragme1B.style.display = "none";
  }
  if(index == 2){
      input1C.style.display = "none";
      rotation1C.style.display = "none";
      dragme1C.style.display = "none";
  }
  if(index == 3){
      input2A.style.display = "none";
      rotation2A.style.display = "none";
      dragme2A.style.display = "none";
  }
  if(index == 4){
      input2B.style.display = "none";
      rotation2B.style.display = "none";
      dragme2B.style.display = "none";
  }
  if(index == 5){
      input2C.style.display = "none";
      rotation2C.style.display = "none";
      dragme2C.style.display = "none";
  }
  if(index == 6){
      input3A.style.display = "none";
      rotation3A.style.display = "none";
      dragme3A.style.display = "none";
  }
  if(index == 7){
      input3B.style.display = "none";
      rotation3B.style.display = "none";
      dragme3B.style.display = "none";
  }
  if(index == 8){
      input3C.style.display = "none";
      rotation3C.style.display = "none";
      dragme3C.style.display = "none";
  }

}
function displayTools(index){
  if(index == 0){
    input1A.style.display = "block";
    rotation1A.style.display = "block";
    dragme1A.style.display = "block";
  }
  if(index == 1){
      input1B.style.display = "block";
      rotation1B.style.display = "block";
      dragme1B.style.display = "block";
  }
  if(index == 2){
      input1C.style.display = "block";
      rotation1C.style.display = "block";
      dragme1C.style.display = "block";
  }
  if(index == 3){
      input2A.style.display = "block";
      rotation2A.style.display = "block";
      dragme2A.style.display = "block";
  }
  if(index == 4){
      input2B.style.display = "block";
      rotation2B.style.display = "block";
      dragme2B.style.display = "block";
  }
  if(index == 5){
      input2C.style.display = "block";
      rotation2C.style.display = "block";
      dragme2C.style.display = "block";
  }
  if(index == 6){
      input3A.style.display = "block";
      rotation3A.style.display = "block";
      dragme3A.style.display = "block";
  }
  if(index == 7){
      input3B.style.display = "block";
      rotation3B.style.display = "block";
      dragme3B.style.display = "block";
  }
  if(index == 8){
      input3C.style.display = "block";
      rotation3C.style.display = "block";
      dragme3C.style.display = "block";
  }
}
