var vinylSize = 650;
var unit = vinylSize/12;
var unitHa = unit/2;
var unitTh = unit/3;

var empty, sqHaOne, rdFuOne, rdHaOne, rdHaTwo, rdHaThree, triFuOne;

var lines = [];

var textTitleW = 0;
var textTitleH = 0;
var textTitleDirectionW = 1/4;
var textTitleDirectionH = 1/2;

var textAlbumW = 2;
var textAlbumH = 2;
var textAlbumDirectionW = 1/4;
var textAlbumDirectionH = 1/2;

var replica;

var a = 240;
var aScroll = 255;
var aStop = 0;

//-------------------------*
function preload() {
   replica = loadFont("fonts/Replica-Bold.otf");
}

//-------------------------*
function setup() {
  var canvas = createCanvas(vinylSize, vinylSize);
  canvas.parent('canvasContainer');

  //Liste formes
  //vide
  empty = createGraphics(unit, unit);

  //rond
  rdFuOne = createGraphics(unit, unit);
  rdFuOne.noStroke();
  rdFuOne.fill(255,0,100);
  rdFuOne.ellipse(unit/2,unit/2,unit,unit);

  rdHaOne = createGraphics(unit, unit);
  rdHaOne.noStroke();
  rdHaOne.fill(0,0,100);
  rdHaOne.ellipse(unit/4,unit/4,unit/2,unit/2);
  rdHaOne.ellipse(unit-unit/4,unit-unit/4,unit/2,unit/2);

  rdHaTwo = createGraphics(unit, unit);
  rdHaTwo.noStroke();
  rdHaTwo.fill(0,0,100);
  rdHaTwo.ellipse(unit/4,unit/4,unit/2,unit/2);
  rdHaTwo.ellipse(unit/4,unit-unit/4,unit/2,unit/2);
  rdHaTwo.ellipse(unit-unit/4,unit/4,unit/2,unit/2);
  rdHaTwo.ellipse(unit-unit/4,unit-unit/4,unit/2,unit/2);

  rdHaThree = createGraphics(unit, unit);
  rdHaThree.noStroke();
  rdHaThree.fill(0,0,100);
  rdHaThree.ellipse(unit-unit/4,unit/4,unit/2,unit/2);
  rdHaThree.ellipse(unit/4,unit-unit/4,unit/2,unit/2);

  rdHaFour = createGraphics(unit, unit);
  rdHaFour.noStroke();
  rdHaFour.fill(0,0,100);
  rdHaFour.ellipse(unit/4,unit/4,unit/2,unit/2);
  rdHaFour.ellipse(unit/4,unit-unit/4,unit/2,unit/2);

  rdThOne = createGraphics(unit, unit);
  rdThOne.noStroke();
  rdThOne.fill(255,0,100);
  rdThOne.ellipse(unit/6,unit/6,unitTh,unitTh);
  rdThOne.ellipse(unit/6+unit/3,unit/6,unitTh,unitTh);
  rdThOne.ellipse(unit/6+unit/3+unit/3,unit/6,unitTh,unitTh);

  rdThOne.ellipse(unit/6,unit/6+unit/3,unitTh,unitTh);
  rdThOne.ellipse(unit/6,unit/6+unit/3+unit/3,unitTh,unitTh);

  rdThOne.ellipse(unit/6+unit/3,unit/6+unit/3,unitTh,unitTh);
  rdThOne.ellipse(unit/6+unit/3,unit/6+unit/3+unit/3,unitTh,unitTh);

  rdThOne.ellipse(unit/6+unit/3+unit/3,unit/6+unit/3,unitTh,unitTh);
  rdThOne.ellipse(unit/6+unit/3+unit/3,unit/6+unit/3+unit/3,unitTh,unitTh);

  rdThTwo = createGraphics(unit, unit);
  rdThTwo.noStroke();
  rdThTwo.fill(0,0,100);
  rdThTwo.ellipse(unit/6,unit/6,unitTh,unitTh);
  rdThTwo.ellipse(unit/6+unit/3+unit/3,unit/6,unitTh,unitTh);

  rdThTwo.ellipse(unit/6,unit/6+unit/3+unit/3,unitTh,unitTh);

  rdThTwo.ellipse(unit/6+unit/3,unit/6+unit/3,unitTh,unitTh);

  rdThTwo.ellipse(unit/6+unit/3+unit/3,unit/6+unit/3+unit/3,unitTh,unitTh);

  //carre
  sqFuOne = createGraphics(unit, unit);
  sqFuOne.noStroke();
  sqFuOne.fill(0,0,100);
  sqFuOne.rect(0,0,unit,unit);

  sqHaOne = createGraphics(unit, unit);
  sqHaOne.noStroke();
  sqHaOne.fill(0,0,100);
  sqHaOne.rect(0,0,unit/2,unit/2);
  sqHaOne.rect(unit/2,unit/2,unit/2,unit/2);

  //triangle
  triFuOne = createGraphics(unit, unit);
  triFuOne.noStroke();
  triFuOne.fill(0,0,100);
  triFuOne.triangle(0, 0, 0, unit, unit, unit);

  triFuTwo = createGraphics(unit, unit);
  triFuTwo.noStroke();
  triFuTwo.fill(0,0,100);
  triFuTwo.triangle(0, 0, unit, 0, unit, unit);

  triHaOne = createGraphics(unit, unit);
  triHaOne.noStroke();
  triHaOne.fill(0,0,100);
  triHaOne.triangle(0, unit/2, unit/2, 0, unit/2, unit/2);
  triHaOne.triangle(unit/2, unit, unit, unit/2, unit, unit);


  for (i=0;i<12;i=i+2) {
    lines.push(new Line(width/2 - vinylSize/2, height/2 - vinylSize/2 + unit*i, 1, empty, rdFuOne, rdHaOne, rdHaTwo, rdHaThree, rdHaFour, rdThOne, rdThTwo, sqFuOne, sqHaOne, triFuOne, triFuTwo, triHaOne));
    lines.push(new Line(width/2 - vinylSize/2, height/2 - vinylSize/2 + unit*i, -1, empty, rdFuOne, rdHaOne, rdHaTwo, rdHaThree, rdHaFour, rdThOne, rdThTwo, sqFuOne, sqHaOne, triFuOne, triFuTwo, triHaOne));
    lines.push(new Line(width/2 - vinylSize/2, height/2 - vinylSize/2 + unit*i+unit, -1, empty, rdFuOne, rdHaOne, rdHaTwo, rdHaThree, rdHaFour, rdThOne, rdThTwo, sqFuOne, sqHaOne, triFuOne, triFuTwo, triHaOne));
    lines.push(new Line(width/2 - vinylSize/2, height/2 - vinylSize/2 + unit*i+unit, 1, empty, rdFuOne, rdHaOne, rdHaTwo, rdHaThree, rdHaFour, rdThOne, rdThTwo, sqFuOne, sqHaOne, triFuOne, triFuTwo, triHaOne));
  }
}

//-------------------------*
function draw() {
  background(255);

  for(var i = 0; i < lines.length; i++) {
    lines[i].update();
    lines[i].display(i % 2);
  }

  // image(rdFuOne,0,unit*0);
  // image(rdHaOne,0,unit*1);
  // image(rdHaTwo,0,unit*2);
  // image(rdHaThree,0,unit*3);
  // image(rdHaFour,0,unit*4);
  // image(sqHaOne,0,unit*5);
  // image(sqFuOne,0,unit*6);
  // image(rdThOne,0,unit*7);
  // image(rdThTwo,0,unit*8);
  // image(rdHaThree,0,unit*9);
  // image(triFuOne,0,unit*10);
  // image(triFuTwo,0,unit*11);
  // image(triHaOne,0,unit*12);

  //visualiseur
  rectMode(CENTER);

  //texte
  rectMode(CORNER);

  noStroke();
  textFont(replica);

  textSize(unit-3);
  fill(255);
  rect( width/2-unit*textTitleW, height/2-unit*textTitleH-unit,unit*4.5,unit)
  fill(0);
  text("LTL-2600", width/2-unit*textTitleW+9, height/2-unit*textTitleH-10);

  textSize(unit/2);
  fill(255);
  rect( width/2-unit*textAlbumW , height/2-unit-unit*textAlbumH,unit*4,unit/2)
  fill(0);
  text("You Can Become", width/2-unit*textAlbumW+3, height/2-unit/2-4-unit*textAlbumH);

  fill(255,255,255,a);
  rect(0,0,vinylSize,vinylSize);

  textSize(50);
  textAlign(CENTER,CENTER);
  fill(0,0,100,aScroll);
  text("Scroll Down", width/2, height/2);

  fill(0,0,100,aStop);
  text("You can't come back", width/2, height/2);
}


//mouvement
function mouseWheel(event) {
  //print(event.delta);
  if(event.delta < 0) {
    for(var i = 0; i < lines.length; i++) {
      lines[i].move(unit/6);
      //lines[i].move(event.delta/2);
    }

    //move title
    textTitleW += textTitleDirectionW;
    textTitleH += textTitleDirectionH;
    if (textTitleW == -1.5 || textTitleW == 6) {
      textTitleDirectionW *= -1
    }
    if (textTitleH == -6 || textTitleH == 5) {
      textTitleDirectionH *= -1
    }

    textAlbumW -= textAlbumDirectionW;
    textAlbumH -= textAlbumDirectionH;
    if (textAlbumW == -2 || textAlbumW == 6) {
      textAlbumDirectionW *= -1
    }
    if (textAlbumH == -6.5 || textAlbumH == 5) {
      textAlbumDirectionH *= -1
    }

    if (a > 0) {
      a-=10;
      aScroll-=10;
    }
    if (aStop > 0) {
      aStop-=25.5;
    }
  }
  if(event.delta > 0) {
    if (a < 200) {
      a+=20;
    }
    if (aStop < 255) {
      aStop+=25.5;
    }
  }
}


function Line(x, y, direction, ...imgs) {
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.imgs = imgs;
  this.randImg = Math.min(int(Math.random() * this.imgs.length), this.imgs.length - 1);
  this.randRep = int(Math.random() * 10);
  this.rep     = 0;

  this.squares = [];
  for(var i = 0; i < int(vinylSize / unit) + 1; i++) {
    if(direction == 1) this.squares.push(new Square(vinylSize - i * unit, 0, this.imgs[this.randImg]));
    else if(direction == -1) this.squares.push(new Square(i * unit, 0, this.imgs[this.randImg]));
  }
}

Line.prototype = {

  update: function() {
    //console.log(this.imgs);
    for(var i = this.squares.length - 1; i >= 0; i--) {
      if((this.direction == 1 && this.squares[i].x > vinylSize) || (this.direction == -1 && this.squares[i].x < -unit)) {
        this.squares.splice(i, 1);
        this.squares.push(new Square(this.squares[this.squares.length - 1].x - this.direction * unit, 0, this.imgs[this.randImg]));
        this.rep++;
        if(this.rep > this.randRep) {
          this.randImg = Math.min(int(Math.random() * this.imgs.length), this.imgs.length - 1);
          this.randRep = int(Math.random() * 10);
          this.rep     = 0;
        }
      }
    }
  },

  display: function(modulo) {
    push();
    translate(this.x, this.y);
    for(var i = 0; i < this.squares.length; i++) {
      this.squares[i].display(modulo);
    }
    pop();
  },

  move: function(x) {
    for(var i = 0; i < this.squares.length; i++) {
      this.squares[i].move(x * this.direction);
    }
  }

}

function Square(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;
}

Square.prototype = {

  display: function(modulo) {
    push();
    translate(this.x, this.y);
    image(this.img, 0, 0);
    pop();
  },

  move: function(x) {
    this.x += x;
  }

}
