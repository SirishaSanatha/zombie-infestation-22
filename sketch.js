var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packages=[];
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgImage=loadImage("bg1.jpg");
	cityImage=loadImage("city.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bg=createSprite(400,380,width,height);
	bg.addImage(bgImage);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	 
	
	engine = Engine.create();
	world = engine.world;

	
	//packageBody = Bodies.circle();
	//World.add(world, packageBody);
     

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

     
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);


  for(i=0;i<packages.length;i++){
    // package();  
	packages[i].show();
}
   

  drawSprites();
  fill ("white");
  textSize(30);
  text("ZOMBIE INFESTATION IN THE CITY",170,35);
 text("press key down to DROP the package",70,692);
  

  
	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packages.push(new package(350 , 200 , 5,{isStatic:false}));
	console.log(packages);

	
  }
}



