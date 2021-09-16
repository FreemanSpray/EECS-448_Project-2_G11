function roundMegreenhorz(x){ return Math.floor(((x-85)/55))}
function roundMegreenvert(y){return Math.floor(((y-85)/61.1))}
function roundMeredhorz(x){ return Math.floor(((x-885)/55))}
function roundMeredvert(y){return Math.floor(((y-85)/61.1))}
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
                  if(e.y>=260 && e.y<=300)
                  {
                        gameLogic.numShips=2;

                  }
                  if(e.y>=310 && e.y<=350)
                  {
                        gameLogic.numShips=3;
                  }
                  if(e.y>=360 && e.y<=400)
                  {
                        gameLogic.numShips=4;
                  }
                  if(e.y>=410 && e.y<=450)
                  {
                        gameLogic.numShips=5;
                  }
                  if(e.y>=460 && e.y<=500)
                  {
                        gameLogic.numShips=6;

                  }
            }
            gameLogic.pickNumShips = false;
            gameLogic.placing == true;
      }

      if (GameLogic.placing == true){
            if(i>=0 && i<10 && j>=0 && j<9){
                  // for each ship needed to place, allow player to place, and then change to player 2 to allow placement
                  console.log(e.x,e.y)
                  //drawHMResult(j,i)
                  console.log(j,i)
                  ship_front_tail.push([j,i])//push coordinates of click to an array that will hold the front and tail of a ship? then one array size is 2, place the ship?
                  //fire_missile([j,i],player1)
            }
      }
      else if (GameLogic.firing == true){
            if(a>=0 && a<10 && b>=0 && b<9)
            {
                  console.log(b,a)
                  //drawHMResult(b,a)
                  fire_missile([b,a], player1)

            }
      }         
})