/*
* @pre 
* @param x represents x coordinate passed in from coordinate pair
* @post Converts x coordinate of screen to x value of cell on green board.
*/
function roundMegreenhorz(x){ return Math.floor(((x-85)/55))}
/*
* @pre 
* @param y represents y coordinate passed in from coordinate pair
* @post Converts y coordinate of screen to y value of cell on green board.
*/
function roundMegreenvert(y){return Math.floor(((y-85)/61.1))}
/*
* @pre 
* @param x represents x coordinate passed in from coordinate pair
* @post Converts x coordinate of screen to x value of cell on red board.
*/
function roundMeredhorz(x){ return Math.floor(((x-885)/55))}
/*
* @pre 
* @param y represents y coordinate passed in from coordinate pair
* @post Converts y coordinate of screen to y value of cell on red board.
*/
function roundMeredvert(y){return Math.floor(((y-85)/61.1))}

/*
* @pre User clicks on screen
* @param e represents x,y coordiante pair for where user clicked on screen.
* @post Performs variety of tasks depending on where user clicked 
*/
document.addEventListener("click", e => {
      const [i] = [e.x].map(roundMegreenhorz);
      const [j] = [e.y].map(roundMegreenvert);
      const[a]=[e.x].map(roundMeredhorz);
      const[b]=[e.y].map(roundMeredvert); 

      if (gameLogic.pickNumShips == true){
            if(e.x>=660 && e.x<=860)//checks to see what button is clicked for number of Ships and set numShips to appropiate value
            {
                  if(e.y>=210 && e.y<=250)
                  {
                        gameLogic.numShips=1;
                  }
                  else if(e.y>=260 && e.y<=300)
                  {
                        gameLogic.numShips=2;

                  }
                  else if(e.y>=310 && e.y<=350)
                  {
                        gameLogic.numShips=3;
                  }
                  else if(e.y>=360 && e.y<=400)
                  {
                        gameLogic.numShips=4;
                  }
                  else if(e.y>=410 && e.y<=450)
                  {
                        gameLogic.numShips=5;
                  }
                  else if(e.y>=460 && e.y<=500)
                  {
                        gameLogic.numShips=6;

                  }
            }
            gameLogic.pickNumShips = false;
            gameLogic.placing == true;
      }

      else if (gameLogic.placing == true){
            if(i>=0 && i<10 && j>=0 && j<9){
                  if (gameLogic.player1Turn == true){
                        // peter place a ship on the specific players board after validating that the ship placement is valid
                  }
            }
      }
      else if (gameLogic.firing == true){
            if(a>=0 && a<10 && b>=0 && b<9)
            {
                  if (gameLogic.player1Turn == true){
                        fire_missile([b,a], player2)
                  }
                  else{
                        fire_missile([b,a], player1)
                  }
            }
      }         
})