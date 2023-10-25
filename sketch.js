var player,playerimg;
var fondo,fondoIMG
var  marciano,macinaoIMG
var bala,balaIMG;


function preload(){
fondoIMG = loadImage("png-transparent-desktop-space-blue-display-resolution-space-atmosphere-computer-wallpaper-color.png")
playerimg = loadImage("1789873.png");
macinaoIMG = loadImage("pngtree-space-invaders-character-game-play-png-image_5289513.png")
balaIMG = loadImage("gun-bullet-clipart-design-illustration-free-png.webp")
}

function setup() {
 createCanvas(500,500);

fondo = createSprite(500,500);
fondo.addImage(fondoIMG);
fondo.scale = 2;



marciano = createSprite(250,50,20,20);
marciano.addImage(macinaoIMG);
marciano.scale = 0.08; 



bala = createSprite(250,450,20,20);
bala.addImage(balaIMG);
bala.scale= 0.04;


player = createSprite(250,450,20,20);
player.addImage(playerimg);
 player.scale = 0.07;



}

function draw() {
 background("white");

//movimiento sdel estebam 
player.x = World.mouseX;





bala.x=World.mouseX;





    drawSprites();
}