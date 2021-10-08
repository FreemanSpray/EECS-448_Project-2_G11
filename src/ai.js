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
        if(genfrontY + shipLength >= 8){
            genTailY = genFrontY - shipLength;    
        }
        else {
            genTailY = genFrontY + shipLength;
        }
    }
    else {
        if(genfrontX + shipLength >= 9){
            genTailX = genFrontX - shipLength;    
        }
        else {
            genTailX = genFrontX + shipLength;
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
        while(shipplaced == false){
            genCoordinates = getRandomCoordinates(i + 1);
            try
            {
                console.log("placing")
                place_ship(genCoordinates[0], genCoordinates[1], player2)
                let ship = new Ship(get_all_ship_cells(genCoordinates[0], genCoordinates[1]))
                all_player2_ships.push(ship)
                shiplength=shiplength+1;
                number_of_plyr2_placed_ships += 1
                shipplaced = true
                  
            } 
            catch(error)
            {
                console.log(error)
                shipplaced = false
            }
        }
    }
}

function AIFireShot(){

}

