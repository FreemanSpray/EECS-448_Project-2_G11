class Player {
    constructor(board, ID){
        this.board = board;
        this.player = ID;
    }
    
}
/*
* @pre none
* @param location of missile destination(where you want the missile to go)
* @post updates the grid of the player who fired it depending on result, displays a blue or red box on the screen where they shot depending on result, alerts the play on the result of a shot
*/
function fire_missile(locations,player)
{
    if(player.board["grid"][locations[0]][locations[1]].filled == true)
    {
        player.board["grid"][locations[0]][locations[1]].hit = true
        drawHitResult(locations[0], locations[1])
        console.log("HIT")
        window.alert("Hit")

    }
    else if(player.board["grid"][locations[0]][locations[1]].filled == false)
    {
        player.board["grid"][locations[0]][locations[1]].miss = true
        drawMissResult(locations[0], locations[1])
        console.log("MISS")
        window.alert("MISS")
        
    }
}

let board1 = new GameState();
let board2 = new GameState();
let player1 = new Player(board1, 1);
let player2 = new Player(board2, 2);