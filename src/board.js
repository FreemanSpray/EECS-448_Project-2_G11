let canvas;
let context;

/*
* @pre none
* @param none
* @post draws the base template for the game
*/
function drawTemplate(){
    context.clearRect(0,0,canvas.width,canvas.length);

    //draw header
    context.font = "50px Times New Roman";
    let gradient = context.createLinearGradient(0,0,canvas.width, 0);
    gradient.addColorStop("0", "black");
    gradient.addColorStop("1", "red");
    context.fillStyle = gradient;
    context.fillText("BattleShip", 650, 50)
    context.stroke();
    context.beginPath();
    context.lineWidth = 1.5;
    context.strokeStyle = gradient;
    context.moveTo(650, 52);
    context.lineTo(857, 52);
    context.stroke();

    //Draw 2 game boards
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "green";
    context.rect(75,75,550,550);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.rect(875,75,550,550);
    context.stroke();

    //label columns for the boards
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for(let x=0; x<10;x++){
        context.font = "30px Verdana";
        context.fillStyle = "black";
        context.fillText(letters[x], 102.5 + 55*x, 70);
        context.fillText(letters[x], 902.5 + 55*x, 70);
    }

    //label rows for the boards
    for(let x=1; x<=9; x++){
        context.font = "30px Verdana";
        context.fillStyle = "black";
        context.fillText(x, 55, 105.5 + (x-1)*61.1);
        context.fillText(x, 1425, 105.5 + (x-1)*61.1);
    }

    //draw the columns/rows in the boards
    for (let x=0; x<9; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(130+(55*x),75);
        context.lineTo(130+(55*x), 625);
        context.stroke();
    }
    for (let x=0; x<9; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(930+(55*x),75);
        context.lineTo(930+(55*x), 625);
        context.stroke();
    }
    for(let x=0; x<8; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(75, 136.1+(x*61.1));
        context.lineTo(625, 136.1+(x*61.1));
        context.stroke();
    }
    for(let x=0; x<8; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(875, 136.1+(x*61.1));
        context.lineTo(1425, 136.1+(x*61.1));
        context.stroke();
    }
    
}

function drawHMResult(x,y){
    // Check for ship in position, if theres a ship, draw red, if not, draw blue?
    context.fillStyle = "red";
    context.fillRect(x*54.9+83, y*61.1+85, 40,40);
}


function drawStartUI(){
    context.font = "30px Times New Roman"
    context.fillStyle = "Black"
    context.textAlign = 'center'
    context.fillText("Welcome to BattleShip!", 750,100, [200])
    context.fillText("How many ships will you be playing with?", 750, 130, [220])
}

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    if (canvas != null){
        context = canvas.getContext("2d");
    } 
    drawTemplate();
    drawStartUI();
  })


