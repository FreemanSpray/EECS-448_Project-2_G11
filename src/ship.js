class Ship {
    constructor(locations){
        this.locations = locations
        this.sunk = false;
        this.size = locations.length
    }
}
let number_of_plyr1_placed_ships = []
let number_of_plyr2_placed_ships = []
let ship_front_tail = []
/*
* @pre none
* @param current player
* @post iterates through a players grid and finds what cells of a players grid are filled, retruns an array of all the filled values
*/
function get_ship_cells(player)
{
    let cells =[]
    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            if(player.board["grid"][i][j].filled == true)
            {
                cells.push([i,j])
            }
        }
    }
    return cells
}

/*
* @pre none
* @param current player
* @post iterates through a players grid and finds what cells of a players grid are hit, retruns an array of all the hit values
*/
function get_hit_cells(player)
{
    let cells =[]
    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            if(player.board["grid"][i][j].hit == true)
            {
                cells.push([i,j])
            }
        }
    }
    return cells
}

/*
* @pre none
* @param current player
* @post iterates through a players grid and finds what cells of a players grid are missed, retruns an array of all the missed values
*/
function get_miss_cells(player)
{
    let cells =[]
    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            if(player.board["grid"][i][j].miss == true)
            {
                cells.push([i,j])
            }
        }
    }
    return cells
}
/*
* @pre none
* @param location of where the ship needs to be placed, the player that is placing the ship
* @post updates the players grid to fill the cells the ship will take up
* @TODO still need to verify if two ships have on or more of the same coordinates
*/
/*
function place_ship(locations, player)
{
    
    //validate coordinates and add to a players grid of ships
    if(locations.length < 1 || locations.length > 6)
    {
        throw 'ship is size is not valid';
    }
    //check is ship is size of 1x1
    if(locations.length == 1)
    {
        player.board["grid"][locations[0][0]][locations[0][1]].filled = true
    }
    //check if ship is horizontal
    else if(locations[0][0] == locations[1][0] )
    {
        let column = locations[0][0]
        for(let i = 0; i < locations.length; i++)
        {
            player.board["grid"][column][locations[i][1]].filled = true;
        }
    }
    //check if ship is vertical
    else if(locations[0][1] == locations[1][1])
    {
        let row = locations[0][1]
        for(let i = 0; i < locations.length; i++)
        {
            player.board["grid"][locations[i][0]][row].filled = true;
        }
    }
    //if coordinates do not have any values in common then ship is diagonal or in nonconnecting cells
    else{
        throw 'Ship can not be placed diagonally or in nonconnected cells'
    }
}*/
/*
* @pre none
* @param front coordinate of ship, last coordinate of ship
* @post constructs a new ship, updates the players grid to fill the cells the ship will take up
* 
*/
function place_ship(cord1, cord2, player)
{
    new Ship(get_all_ship_cells(cord1, cord2))
    let ship = get_all_ship_cells(cord1, cord2)
    const [row_one, col_one] = cord1
    const [row_two, col_two] = cord2
    const [left_col, right_col] = [Math.min(col_one, col_two), Math.max(col_one, col_two)]
    const [top_row, bottom_row] = [Math.min(row_one, row_two), Math.max(row_one, row_two)]
    const is_horizontal = top_row === bottom_row
    const is_vertical = left_col === right_col
    //validate coordinates and add to a players grid of ships
    verify_cordinates(ship.length, cord1, cord2, player)
    //check is ship is size of 1x1
    if(ship.length == 1)
    {
        player.board["grid"][ship[0][0]][ship[0][1]].filled = true
    }
    //check if ship is horizontal
    else if(is_horizontal)
    {
        let column = ship[0][0]
        for(let i = 0; i < ship.length; i++)
        {
            player.board["grid"][column][ship[i][1]].filled = true;
        }
    }
    //check if ship is vertical
    else if(is_vertical)
    {
        let row = ship[0][1]
        for(let i = 0; i < ship.length; i++)
        {
            player.board["grid"][ship[i][0]][row].filled = true;
        }
    }
    //if coordinates do not have any values in common then ship is diagonal or in nonconnecting cells
    else{
        throw 'Ship can not be placed diagonally or in nonconnected cells'
    }
}
/*
* @pre none
* @param front coordinate of ship, last coordinate of ship
* @post returns an array that covers all value of a ship
*/
function get_all_ship_cells(cord1, cord2) {
    const [row_one, col_one] = cord1
    const [row_two, col_two] = cord2
    const [left_col, right_col] = [Math.min(col_one, col_two), Math.max(col_one, col_two)]
    const [top_row, bottom_row] = [Math.min(row_one, row_two), Math.max(row_one, row_two)]
    const is_horizontal = top_row === bottom_row
    const is_vertical = left_col === right_col

    if ( is_horizontal ) {
        return Array((right_col - left_col) + 1).fill('').map((_, i) => {
            return [top_row, i + left_col]
        })
    } else {
        return Array((bottom_row - top_row) + 1).fill('').map((_, i) => {
            return [i + top_row, left_col]
        })
    }
}

function verify_cordinates(ship_size, cord1, cord2, player)
{
    //verify the size of the
    if(ship_size != get_all_ship_cells(cord1, cord2).length )
    {
        throw 'ship is size does not match covered cell lenghth'
    }
    //verify if ship size is with in the valid ship sizes
    if(ship_size < 1 || ship_size > 6)
    {
        throw 'ship is size is not valid';
    }
    const [row_one, col_one] = cord1
    const [row_two, col_two] = cord2
    const [left_col, right_col] = [Math.min(col_one, col_two), Math.max(col_one, col_two)]
    const [top_row, bottom_row] = [Math.min(row_one, row_two), Math.max(row_one, row_two)]
    const ship_cells = get_ship_cells(player)
    const is_horizontal = top_row === bottom_row
    const is_vertical = left_col === right_col
    const placement_cells = []

    if ( is_horizontal ) 
    {
        // Make sure the input length matches the given ship length
        if ( (right_col - left_col) !== (ship_size - 1) )
            throw 'ship length is invalid'

        Array(ship_size).fill('').map((_, i) => {
                placement_cells.push([top_row, i + left_col])
            })
        } 
        else 
        {
            // Make sure the input length matches the given ship length
            if ( (bottom_row - top_row) !== (ship_size - 1) )
                throw ('ship length is invalid')

            Array(ship_size).fill('').map((_, i) => {
                placement_cells.push([i + top_row, left_col])
            })
        }

        //verify if a ship is going to overlap with another
        let if_overlapping = ship_cells.some(([ship_row, ship_col]) => {
            return placement_cells.some(([placement_row, placement_col]) => {
                return ship_row === placement_row && ship_col === placement_col
            })
        })

        if ( if_overlapping )
        {
            throw 'ship would overlap with another'
    }
}

//used to test if locations worked
//place_ship([4,3],[4,1], player1)
//place_ship([1,2],[3,2], player1)