var mic;
var desert;
var monk;


function preload () {
    desert = loadImage ('assets/bk.jpg');
    monk = loadImage ('assets/mk.png');
}


function setup() {
   createCanvas(500,500);    
    mic = new p5.AudioIn();    
    mic.start();
    
}



function draw() {
    //background(0,255,200);
    var vol = mic.getLevel();
    //console.log(vol);
    
    image(desert,0,0,500,500); 
    //push();
    translate(0,50);
    image(monk,0,vol*-300,500,500);
    //pop();
    
   if (vol>0.1) {
       push();
        desert.filter(INVERT);
       pop();
        } 
    
    noStroke();
    fill(0,200,255);
    ellipse(160,250+(vol*-350),17,17);
    rect(300,300+(vol*-80),7,30);
    triangle(245, 133+(vol*-270), 237, 119+(vol*-270), 253, 119+(vol*-270));
    
  }
