var Zoe, alien, meteors, space, diamond;
var zoeImg, alienImg, meteorImg, spacebg, diamondImg;

function preload(){
  zoeImg= loadImage("Rocket.gif");
  alienImg= loadImage("spaceship.png");
  meteorImg= loadImage("meteors.png");
  spacebg= loadImage("space_Bg.png");
  diamondImg= loadImage("diamonds.png");
}

function setup(){

  createCanvas(windowWidth, windowHeight);

  Zoe= createSprite(windowWidth/4 - 100, 550, 20,20);
  Zoe.addImage(zoeImg);
  Zoe.scale= 0.4;

  alien= createSprite( 200, 400, 30, 30);
  alien.addImage(alienImg);
  alien.scale= 0.4;

  meteors= createSprite( windowWidth/2- 500, windowHeight/2 - 200, 30, 30);
  meteors.addImage(meteorImg);
  meteors.scale= 1.2;

  diamond= createSprite( windowWidth/2 - 400, windowHeight/3 - 100, 30, 30);
  diamond.addImage(diamondImg);
  diamond.scale= 0.6;

}

function draw (){


  background(spacebg)

  drawSprites();
}
