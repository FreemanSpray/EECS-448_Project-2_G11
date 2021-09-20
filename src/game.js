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
let endshipplacing_helper=0;
 
function endTurnshipplacing(x,y){
    if (x>=650 && x<=850 && y >=300 && y <=340 ){
        if (gameLogic.player1Turn == false && gameLogic.player2Turn==false && gameLogic.placing==true){
            gameLogic.player2Turn = true;
            gameLogic.player1Turn = false;
            drawStartTurnButton();
 
        }
        else if(gameLogic.player1Turn==false && gameLogic.player2Turn==true && gameLogic.placing==true)
        {
            drawTemplate();
            shiplength=1;
            alert("Place your length 1 ship");
            boardfreezestate=0;
        }
        /*else if (gameLogic.player1Turn == false && gameLogic.player2Turn==false && gameLogic.placing == true)
        {
            console.log("hello")
            gameLogic.player1.Turn==false
            
            drawStartTurnButton();
 
        }
        */
 
        
    }
    
}
function transition(x,y){
    if (x>=650 && x<=850 && y >=300 && y <=340 && gameLogic.placing==false && gameLogic.firing==false)
    {
 
        if(gameLogic.player1Turn == true && gameLogic.player2Turn==false && endshipplacing_helper==0)
        {
            drawStartTurnButton();
            endshipplacing_helper=1;
 
        }
        else if(gameLogic.player1Turn == true && gameLogic.player2Turn==false && endshipplacing_helper==1)
        {
            boardfreezestate=0;
            gameLogic.firing=true;
        }
 
    }
}

function endTurngame(x,y)
{
    if (x>=650 && x<=850 && y >=300 && y <=340 && gameLogic.placing==false && gameLogic.firing==true)
    {
        if(gameLogic.player1Turn == true && gameLogic.player2Turn==false)
        {
            console.log("1turn")
            drawTemplate();
            gameLogic.player1Turn==false;
            //drawStartTurnButton();
        }
         //console.log(gameLogic.player1Turn,gameLogic.player2Turn)
        else if(gameLogic.player1Turn==false && gameLogic.player2Turn==false)
        {
            console.log("2turn");
            drawStartTurnButton();
        }


    }

}

