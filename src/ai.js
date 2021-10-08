let genFront = [];
let genTail = [];
let genFrontX;
let genFrontY;
let genTailX;
let genTailY;
let genOrientation;
let genCoordinates = [];

function getRandomCoordinates(shipLength){
    genFrontX = Math.floor(Math.random()*(10)); //ranges between 0 and 9
    genFrontY = Math.floor(Math.random()*(9)); //ranges between 0 and 8
    genOrientation = Math.floor(Math.random()*2);  //ranges between 0 and 1 
    if(genOrientation == 0){ //0 is vertical, 1 is horizontal
        genTailX = genFrontX;
        if(genFrontY + (shipLength - 1) >= 8){
            genTailY = genFrontY - (shipLength - 1);    
        }
        else {
            genTailY = genFrontY + (shipLength - 1);
        }
    }
    else {
        if(genFrontX + (shipLength - 1) >= 9){
            genTailX = genFrontX - (shipLength - 1);    
        }
        else {
            genTailX = genFrontX + (shipLength - 1);
        }
        genTailY = genFrontY;
    }
    genFront.push(genFrontX);
    genFront.push(genFrontY);
    genTail.push(genTailX);
    genTail.push(genTailY);
    return([genFront, genTail]);
}

function placeAIShips(){
    for(let i = 1; i <= gameLogic.numShips; i++){
        let shipplaced = false;
        while(shipplaced == false){
            genCoordinates = getRandomCoordinates(i);
            try
            {
                console.log(genCoordinates)
                place_ship(genCoordinates[0], genCoordinates[1], player2)
                let ship = new Ship(get_all_ship_cells(genCoordinates[0], genCoordinates[1]))
                all_player2_ships.push(ship)
                number_of_plyr2_placed_ships += 1
                shipplaced = true
                  
            } 
            catch(error)
            {
                console.log(error)
                shipplaced = false
            }
            genCoordinates.pop();
            genFront.pop();
            genTail.pop();
            genCoordinates.pop();
            genFront.pop();
            genTail.pop();
        }
    }
}

function AIFireShot(){

}

