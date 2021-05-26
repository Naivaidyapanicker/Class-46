var ground,groungimg;
var ironman , ironmanImg;
var shoot = 0;
var laser,laserImg;
var bg,bgimg;

function preload(){
 groundimg=loadImage("ground.png");
 ironmanImg=loadImage("ironmanstand.png");
 laserImg=loadImage("laserbeam.png");
 bgimg=loadAnimation("background.gif");

}

function setup(){
  createCanvas(1000,1000);
 ground=createSprite(500,980,1000,50);
ground.addImage("ground",groundimg);
ground.scale=2.0;

bg=createSprite(300,435,1000,800);
bg.addAnimation("bg",bgimg);

ironman=createSprite(500,800,50,50);
ironman.addImage("ironman",ironmanImg);
ironman.scale =0.35;

laserGroup = new Group;  


}


function draw(){
  if(keyDown("up")){
    
    ironman.velocityY = -1;
  }

  
  shoot = shoot - 1;

  if(keyDown("space") && shoot < 460) {
    laser = createSprite(ironman.x,ironman.y - 130);
    laser.addImage(laserImg);
    laser.velocityY = -8; 
    laser.scale = 0.9;
    laserGroup.add(laser);
    //laserSound.play();
    //console.log(laser.x);
    shoot = laser.y;
  }  
drawSprites();
}