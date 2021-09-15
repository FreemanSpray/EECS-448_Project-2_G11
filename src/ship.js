class Ship {
    constructor(locations){
        this.locations = locations
        this.sunk = false;
        this.size = locations.length
    }
    
    /*
    @TODO still need to verify if two ships have on or more of the same coordinates
    */
    place_ship(locations, player){
        //validate coordinates and add to a players grid of ships
        if(locations.length < 1 || locations.length > 6)
        {
            throw 'ship is size is not valid';
        }
        //check is ship is size of 1x1
        if(locations.length == 1)
        {
            player1.board["grid"][locations[0][0]][locations[0][1]].filled = true
        }
        //check if ship is vertical
        else if(locations[0][0] == locations[1][0] )
        {
            let column = locations[0][0]
            for(let i = 0; i < locations.length; i++)
            {
                player1.board["grid"][locations[i][1]][column].filled = true;
            }
        }
        //check if ship is horizontal
        else if(locations[0][1] == locations[1][1])
        {
            let row = locations[0][1]
            for(let i = 0; i < locations.length; i++)
            {
                player.board["grid"][row][locations[i][0]].filled = true;
            }
        }
        //if coordinates do not have any values in common then ship is diagonal or in nonconnecting cells
        else{
            throw 'Ship can not be placed diagonally or in nonconnected cells'
        }

    }
}
//used to test if basic locations worked
let ship1 = new Ship([[1,2],[2,2],[3,2]])
let ship2 = new Ship([[4,1],[4,2],[4,3]])