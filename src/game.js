class GameLogic{
    constructor(){
        this.pickNumShips = true;
        this.placing = false;
        this.player1Turn = true;
        this.firing = false;
        this.numShips = 1;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    let gameLogic = new GameLogic();
    setTimeout(() => {  alert("Pick how many ships you'd like to play with!");   }, 300);
})
