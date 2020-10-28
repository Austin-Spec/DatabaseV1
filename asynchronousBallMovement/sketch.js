var ball, ballposition;
var database;
var dbposition;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    ballposition = database.ref('ball/position');
    ballposition.on('value', readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x: dbposition.x + x,
        y: dbposition.y + y
    })
}

function readposition(data){
    dbposition = data.val()
    ball.x=dbposition.x
    ball.y=dbposition.y
}

function showerror(){
    console.log("error in the database")
}