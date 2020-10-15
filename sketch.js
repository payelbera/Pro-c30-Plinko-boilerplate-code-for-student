const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var engine, world;
var box1,box2,box3,box4;
var box5,box6,box7;
var backgroundImg,platform;

var divisionHeight = 300;
//arrays
var divisions = []; 
// declare particle and plinko arrays

var particle;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    for(var k = 0; k<=width; k = k +80 ){
        divisions.push(new Divisions( k, height-divisionHeight/2,10, divisionHeight))
    }
    for(var i = 40; i<=width; i = i +50 ){
        plinkos.push(new Plinko(i,75))
    }
    // create 2 more rows of plinkos using the similar for loop as above just change the y values
 
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(2);
  
    ground.display();
    if(frameCount % 60 === 0){
       //fill up particle array with new Particles objects 
       // display particle object
       
       // push particle object to particles array
       
    }
    for(x=0;x<particles.length;x++){
     particles[x].display();
    }

    //display divisions array by looping through it

    for(var i = 0; i< plinkos.length; i++ ){
        plinkos[i].display(); 
    
    }
    // display more plinkos arrays

}

