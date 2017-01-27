var drops = [];
var n = 500;
var g = 0.05;

var minSpeed = 2;
var maxSpeed = 6;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  for (var i=0; i<n; i++){
	drops.push(new Drop());
  }
}

function draw() {
	background(0);
	for(var i=0; i<n; i++){
		drops[i].fall();
		drops[i].show();
	}
	
}

function mousePressed(){
	console.log('click');
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}

function Drop(){
	this.x = random(width);
	this.y = random(-400,-50);
	this.z = random(0,20);
	this.yspeed = map(this.z,0,20,minSpeed,maxSpeed);
	this.len = map(this.z,0,20,5,15);
	this.thick = map(this.z,0,20,1,3);
	
	this.fall = function(){
		
		this.y = this.y+this.yspeed;
		this.yspeed = this.yspeed+g;
		if(this.y > height){
			this.x = random(width);
			this.y = random(-200,-100);
			this.yspeed = map(this.z,0,20,minSpeed,maxSpeed);
		}
	}
	
	this.show = function(){
		strokeWeight(this.thick);
		stroke(138,43,226);
		line(this.x,this.y,this.x,this.y+this.len);
		
	}

}