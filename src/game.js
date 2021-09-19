class GameLogic{
    constructor(){
        this.pickNumShips = true;
        this.placing = false;
        this.player1Turn = true;
        this.player2Turn = true;
        this.firing = false;
        this.numShips = 1;
    }
}
let gameLogic = new GameLogic();
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {  alert("Pick how many ships you'd like to play with!");   }, 300);
})

function endTurn(x,y){
    if (x>=650 && x<=850 && y >=300 && y <=340 ){
        if (gameLogic.player1Turn == true && gameLogic.placing == true){
            gameLogic.player2Turn == true;
            gameLogic.player1Turn == false;
        }

    }
}
