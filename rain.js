var drops = [];  // array to hold list of rain drops
var n = 500;  // number of drops to create
var g = 0.05;  // value of gravity

// initial speed constraints
var minSpeed = 2;
var maxSpeed = 6;

// one-time setup
function setup() {
  createCanvas(windowWidth, windowHeight);  // create canvas that fills the screen, regardless of size
  background(0);  // colour = black
  
  // fill drops array with Drop() objects
  for (var i=0; i<n; i++){
	drops.push(new Drop());
  }
}

// loops indefinitely
function draw() {
	background(0); // draw black background each frame
	
	// iterate through every drop on the screen
	for(var i=0; i<n; i++){
		drops[i].fall(); // update position
		drops[i].show(); // draw on canvas
	}
	
}

// this function is triggered whenever the mouse is clicked
function mousePressed(){
	console.log('click');  // output message to console to indicate reaction
}

function windowResized(){  // allow screen to be resized on-the-fly (no refresh)
	resizeCanvas(windowWidth,windowHeight)
}

// main object
function Drop(){
    // constructor code: this sets up the initial values of attributes
    
	this.x = random(width);  // place drop anywhere between left and right sides of canvas
	this.y = random(-400,-50); // place drop somewhere between 50 and 400 pixels above canvas (fall into canvas)
	this.z = random(0,20);  // arbitrary unitless "closeness" to viewer (to simulate depth)
	this.yspeed = map(this.z,0,20,minSpeed,maxSpeed); // initial speed (closer = faster)
	this.len = map(this.z,0,20,5,15); // closer = longer drop
	this.thick = map(this.z,0,20,1,3); // closer = wider drop
	
	// method that simulates falling (updating position)
	this.fall = function(){
		this.y = this.y+this.yspeed; // increase position according to speed
		this.yspeed = this.yspeed+g; // increase speed according to gravity
		
		// if drop has reached the bottom of the canvas, move to top with new speed value
		if(this.y > height){
			this.x = random(width); // new random horizontal position
			this.y = random(-200,-100); // somewhere 100-200 pixels above canvas
			this.yspeed = map(this.z,0,20,minSpeed,maxSpeed); // new random speed according to closeness
		}
	}
	
	// draw drop on screen
	this.show = function(){
		strokeWeight(this.thick); // set stroke width 
		stroke(138,43,226); // set stroke colour (RGB values for purple)
		line(this.x, this.y, this.x, this.y+this.len); // create a vertical line starting at drops position, with appropriate length
		
	}

}
