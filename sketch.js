var bg,bgImg;
var player,playerImg
var deer,deerImg,deerGroup
var laser,laserImg,laserGroup
var shoot = 0;

function preload(){
    bgImg =loadImage("bgnew.jpg");

 playerImg = loadImage("boynew.png");
 deerImg =loadImage("deernew.png");
  laserImg =loadImage("bulletnew.jpg")
}


function setup(){
    createCanvas(1000,600)

 bg = createSprite(600,300);
    bg.addImage(bgImg);
    bg.scale =1.0;
bg.velocityX =-2;


player =createSprite(50,450);
player.addImage(playerImg);
player.scale =1.0;

deerGroup = new Group;
laserGroup =new Group;

}

function draw(){
    background(0);

   
if (bg.x <50){
    bg.x = bg.width/2;
  }

  if(keyDown("UP_ARROW")){
    player.y = player.y - 4;
  
  }
  if(keyDown("DOWN_ARROW")){
    player.y = player.y + 4;
  
  }
  
    
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 4;
   
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 4;
  
  }

  shoot = shoot-1
  if(keyDown("space") && shoot <0){
  laser = createSprite(player.x,player.y);
  laser.addImage(laserImg);
  laser.velocityX = 5 ;
  laserGroup.add(laser);
  shoot = laser.x;
  lase
 
  }
 

  
  spawnDeers();
    drawSprites()
}



function spawnDeers(){
    if(World.frameCount % 150 === 0){
        deer =createSprite(1100,500);
        deer.addImage(deerImg);
        deer.velocityX =-2;
       // deer.y =Math.round(random(550,50));
        deerGroup.add(deer);
        deer.scale = 0.25
    }
}

