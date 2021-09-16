class GameLogic{
    constructor(){
        this.pickNumShips = true;
        this.placing = false;
        this.player1Turn = true;
        this.firing = false;
        this.numShips = 1;
    }
}
let gameLogic = new GameLogic();
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {  alert("Pick how many ships you'd like to play with!");   }, 300);
//     for(var f = 2; f <= gameLogic.numShips; f++){
//         alert('Pick your ${f} length ship.')
//   }
})
