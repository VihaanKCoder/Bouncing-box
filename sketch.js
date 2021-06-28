//creating variables
var canvas;
var block1,block2,block3,block4;
var ball, edges;
var sound;

function preload(){
    //music not playing during given condition
    sound = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    //creating sprites
    block1 = createSprite(100,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,190,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,190,30);
    block3.shapeColor="yellow";

    block4 = createSprite(700,580,190,30);
    block4.shapeColor="red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = -5;
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    //code for ball to bounce sufaces
    ball.bounceOff(edges);
    // bounceOff code removed due to problem in isTouching code

    //code for changing conditions according to block hit
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        sound.play();
    }


    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
    }

    if(block3.isTouching(ball)){
        ball.shapeColor="yellow";
        textSize(32);
        text("Are you enjoying it",300,30);
    }

    if(block4.isTouching(ball)){
        ball.shapeColor="red";
        ball.velocityX = 0;
        ball.velocityY = 0;
        textSize(32);
        text("Game Over,refresh or start the game",150,30);
    }

    //function to draw sprites
    drawSprites();
}
