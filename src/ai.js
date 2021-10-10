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


let genX;
let genY;
let genShot = [];

/** 
* @pre none
* @param none
* @post returns a size 2 array containing a randomly generated y coordinate and x coordinate. For use by Easy AI.
*/
function easyShot(){
    genX = Math.floor(Math.random()*(10))
    genY = Math.floor(Math.random()*(9))
    return([genY, genX]);
}

/** 
* @pre none
* @param none
* @post returns a size 2 array containing a randomly generated y coordinate and x coordinate, except in the case when a ship has been hit, in which case it returns adjacent coordinates. For use by Medium AI. 
*/
function mediumShot(){
    let normShot = easyShot();
    let foundShip = -1;
    let activeShips = [];
    let targets = [];

    //remove all sunk ships from active list.
    for(i = 0; i < all_player1_ships.length; i++)
    {
        if(all_player1_ships[i].sunk == false)
        {
            activeShips.push(all_player1_ships[i]);
        }
        else
        {
            activeShips.push();
        }
    }

    //find any active ships, that have been hit
    for(i = 0; i < activeShips.length; i++)
    {
        if((get_all_ship_cells(activeShips[i]).filter(x => get_hit_cells(player1).indexOf(x) !== -1)) != [])
        {
            foundShip = i;
        }
    }

    //target the found ship, in a spot it has not yet been hit
    if(foundShip != -1)
    {
        targets = get_all_ship_cells(activeShips[foundShip]).filter(x => get_hit_cells(player1).indexOf(x) == -1);
        normShot = targets[0];
    }

    return normShot;
}

/** 
* @pre none
* @param none
* @post returns a size 2 array containing a y and x coordinate where a filled cell is located. For use by Hard AI.
*/
function hardShot(){
    let cheatShot = get_ship_cells(player1);
    cheatShot = cheatShot.filter(function(x){
        return get_hit_cells(player1).indexOf(x) < 0;
    })

    return cheatShot[0];
}

function AIFireShot(){
    if(gameLogic.opponent == 2){
        genShot = easyShot();
    }
    else if(gameLogic.opponent == 3){
        genShot = mediumShot();
    }
    else {
        genShot = hardShot();
    }
    gameLogic.temp_player = 2;
    fire_missile(genShot, player1)
if (gameLogic.gameMode == 2){   		//mirror functionality - a shot on player 2 is mirrored on player 1's board.
  fire_missile(genShot, player2);
}
    sink_ships(player2)  //sinking both players' ships (regardless of mode, nothing will sink when a player isn't fired upon during a round)
    sink_ships(player1)
    win_check()
    gameLogic.player2Turn = false;
}

