var myBox, myBox2;

function setup() {
	 createCanvas(window.innerWidth, window.innerHeight);

	 myBox = new Box (width/2, height/2, 200, 200);
	 myBox2 = new Box (width/4, height/2, 200, 200);
}

function draw() {
	background(0);

	myBox.display();
	myBox2.display();

}
function mousePressed(){
	myBox.isOn(mouseX, mouseY);
}

function mouseMoved(){

}function mouseReleased(){
	if(myBox.active){
		myBox.active = false;
	}
}



function Box(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.rotation = 0;
	this.scale = {x: 1, y: 1};

	this.active = false;

	this.display = function(){
		push();
		translate(this.x, this.y);
		rotate(this.rotation);
		scale(this.scale.x, this.scale.y);
		translate(-this.w / 2, -this.h / 2);
		fill(255,0,0);
		rect(0,0,this.w/2,this.h);
		fill (0,0,255);
		rect(this.w/2,0,this.w/2,this.h);
		pop();

		//var isTheMousOn = this.isOn(mouseX, mouseY);
	}

	this.rotate = function(){
		this.rotation += Math.PI/4;
	}
	this.mirror = function(){
		this.scale.x *= -1;
	}
	this.isOn = function(mX, mY){
		if(	mX > this.x - this.w / 2 && mX < this.x + this.w / 2 &&
				mY > this.y - this.h / 2 && mY < this.y + this.h / 2){
					this.active = true;
		}else this.active = false;
	}
}
