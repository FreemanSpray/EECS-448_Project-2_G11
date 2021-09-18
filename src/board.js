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
/*
* @pre none
* @param x coordinate and y coordinate of the cell selected to fire at
* @post draws a red box at the coordinates
*/
function drawHitResult(x,y){
    // Check for ship in position, if theres a ship, draw red, if not, draw blue?
    context.fillStyle = "red";
    context.fillRect(y*54.9+883, x*61.1+85, 40,40);
}
/*
* @pre none
* @param x coordinate and y coordinate of the cell selected to fire at
* @post draws a blue box at the coordinates
*/
function drawMissResult(x,y){
    context.fillStyle = "blue";
    context.fillRect(y*54.9+883, x*61.1+85, 40,40);
}

/*
* @pre none
* @param none
* @post draws the Start selection UI elements for the game
*/
function drawStartUI(){
    //draws sub header
    context.font = "30px Times New Roman";
    context.fillStyle = "Black";
    context.textAlign = 'center';
    context.fillText("Welcome to BattleShip!", 750,100, [200]);
    context.fillText("Choose the number of ships to place", 750, 150, [220]);

    //draws the buttons for ship # selection
    for(let x = 1; x<=6; x++){
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "Grey";
        context.rect(650, 150+50*x, 200, 40);
        context.stroke();
        context.font = "20px Times New Roman";
        context.fillStyle = "Black";
        context.textAlign = "center";
        if (x == 1){
            context.fillText(x + " Battleship", 750, 175+50*x);
        } else {
            context.fillText(x + " Battleships", 750, 175+50*x);
        }
    }
}

/*
* @pre none
* @param none
* @post draws the text that will display while the players are placing their ships
*/
function drawPlacingShipsText(){
    drawTemplate();
    context.font = "30px Times New Roman";
    context.fillStyle = "Black";
    context.textAlign = 'center';
    if (gameLogic.player1Turn == true){
        context.fillText("Player 1 place your ships!", 750,100, [200]);
    } else {
        context.fillText("Player 2 place your ships!", 750,100, [200]);
    }
    
}

/*
* @pre none
* @param none
* @post draws the button that will indicate a given player is done with their turn
*/
function drawDoneTurnButton(){
    drawTemplate();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "Grey";
    context.rect(650, 300, 200, 40);
    context.stroke();
    context.font = "20px Times New Roman";
    context.fillStyle = "Black";
    context.textAlign = "center";
    if (gameLogic.player1Turn == true){
        context.fillText("Player 1 Turn Done", 750, 325);
    } else {
        context.fillText("Player 2 Turn Done", 750, 325);
    }
    
}

/*
* @pre none
* @param none
* @post draws the button that indicates a given player is about to start their turn
*/
function drawStartTurnButton(){
    drawTemplate();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "Grey";
    context.rect(650, 300, 200, 40);
    context.stroke();
    context.font = "20px Times New Roman";
    context.fillStyle = "Black";
    context.textAlign = "center";
    if (gameLogic.player1Turn == true){
        context.fillText("P1 Start Turn", 750, 325);
    } else {
        context.fillText("P2 Start Turn", 750, 325);
    }
    
}

/*
* @pre none
* @param none
* @post draws the ships of a given player when it is their turn
*/
function drawPlayersShipsDuringTurn(){
    let gamePiecePosistions = new Array(9);
    let playerCells;

    for(let y=0; y < 9; y++){
        gamePiecePosistions[y] = new Array(10);
        for(let x=0; x < 10; x++){
            gamePiecePosistions[y][x] = [85.5 + y*61.1, 82.5 + x*55];
        }
    }
    
    if(gameLogic.player1Turn == true){
        playerCells = get_ship_cells(player1);
    } else if (gameLogic.player1Turn == false) {
        playerCells = get_ship_cells(player2);
    }

    console.log(playerCells.length);
    for(let y = 0; y < 9; y++){
        for(let x =0; x < 10; x++){
            for(let z =0; z < playerCells.length; z++){
                if( equals(playerCells[z],[y,x]) ){
                    context.fillRect(gamePiecePosistions[y][x][1], gamePiecePosistions[y][x][0], 40, 40);
                }
            }
        }
    }       
}

/*
* @pre none
* @param none
* @post draws a line through the middle of a line of cells that make up a ship
*/
function drawShipConnections(){
    let gamePiecePosistions = new Array(9);
    let allPlayerShips;
    //gamepiecePosistions is an array of all the cell posistions
    for(let y=0; y < 9; y++){
        gamePiecePosistions[y] = new Array(10);
        for(let x=0; x < 10; x++){
            gamePiecePosistions[y][x] = [75 + y*61.1, 75 + x*55];
        }
    }
    //Deciding which players ships are being looked at
    if (gameLogic.player1Turn == true){
        allPlayerShips = all_player1_ships;
    } else {
        allPlayerShips = all_player2_ships;
    }
    //iterating through all of the players ships   
    for(let i = 0; i < allPlayerShips.length; i++){
        let currentShip = allPlayerShips[i];
        //If the currentShip has a length of one, we don't need to do anything
        //if not, check to see if the first cell location and last cell location share a value in the x or y direction to decide if the line should be horizontal or vertical
        //Then draw the line using the gamePiecePosistions array to find the exact starting and ending positions for the line
        if (currentShip.length != 1){
            if (currentShip.locations[0][0] == currentShip.locations[currentShip.locations.length-1][0]){
                console.log("Im in it");
                context.beginPath();
                context.lineWidth = 1.5;
                context.strokeStyle = "black";
                context.moveTo(gamePiecePosistions[currentShip.locations[0][0]][currentShip.locations[0][1]][1], gamePiecePosistions[currentShip.locations[0][0]][currentShip.locatins[0][1]][0]+30.55);
                context.lineTo(gamePiecePosistions[currentShip.locations[1][0]][currentShip.locations[1][1]][1], gamePiecePosistions[currentShip.locations[1][0]][currentShip.locatins[1][1]][0]+30.55)
                context.stroke();
            } else if (currentShip.locations[0][1] == currentShip.locations[currentShip.locations.length-1][1]){
                console.log("Im bout it");
                context.beginPath();
                context.lineWidth = 1.5;
                context.strokeStyle = "black";
                context.moveTo(gamePiecePosistions[currentShip.locations[0][0]][currentShip.locations[0][1]][1]+27.5, gamePiecePosistions[currentShip.locations[0][0]][currentShip.locatins[0][1]][0]);
                context.lineTo(gamePiecePosistions[currentShip.locations[1][0]][currentShip.locations[1][1]][1]+27.5, gamePiecePosistions[currentShip.locations[1][0]][currentShip.locatins[1][1]][0]);
                context.stroke();
            }

        }
    }
}

/*
* @pre none
* @param Any given 2 arrays
* @post Returns true if the arrays are equal
*/
function equals(array1, array2){
    for(let x=0; x<array1.length; x++){
      if(array1[x] != array2[x]){
        return false;
      }
    }
    return true;
  }

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    if (canvas != null){
        context = canvas.getContext("2d");
    } 
    drawTemplate();
    drawStartUI();
    drawShipConnections();
    // player1.board["grid"][0][1].filled = true;
    // player1.board["grid"][3][3].hit = true;
    // player1.board["grid"][6][7].miss = true;
    // player1.board["grid"][3][4].hit = true;
    // player2.board["grid"][0][1].hit = true;
    // drawPlayersShipsDuringTurn();
    // drawHitsAndMissesDuringTurn();
  })


