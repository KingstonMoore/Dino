function preload(){
  treximg= loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundimg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600, 200)
  trex = createSprite(50, 180, 50, 30)
  trex.addAnimation("trexani",treximg)
  trex.scale = 0.5
  ground = createSprite(300, 190, 600, 20)
  ground.addImage(groundimg)
}

function draw(){
  background("lightgrey")
  ground.velocityX = -5
  trex.collide(ground)
  if (ground.x<0){
    ground.x = 600
  }
  if (keyDown(" ")){
    trex.velocityY = -4
  }
  trex.velocityY = trex.velocityY + 0.2
  drawSprites()  
}
