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
                  gameLogic.pickNumShips = false;
                  gameLogic.placing = true;
                  alert('Place your 1 length ship.')
            }
            
      }
      else if (gameLogic.placing == true){
            if(i>=0 && i<10 && j>=0 && j<9){
                  if (gameLogic.player1Turn == true){
                        if(player1.board.shipsPlaced < gameLogic.numShips){
                              if(player1.board.shipsPlaced == 0){
                                    place_ship([j,i],[j,i],player1);
                                    player1.board.shipsPlaced++;
                              }
                              else if(ship_front_tail.length == 2){
                                    place_ship(ship_front_tail[0],ship_front_tail[1],player1);
                                    ship_front_tail = [];
                                    player1.board.shipsPlaced++;
                              }
                              else{
                                    ship_front_tail.push([j,i]);  
                              }
                        }
                        else{
                              gameLogic.player1Turn = false;
                        }
                  }
                  else if (gameLogic.player1Turn == false){
                        if(player2.board.shipsPlaced < gameLogic.numShips){
                              if(player2.board.shipsPlaced == 0){
                                    place_ship([j,i],[j,i],player2);
                                    player2.board.shipsPlaced++;
                              }
                              else if(ship_front_tail.length == 2){
                                    place_ship(ship_front_tail[0],ship_front_tail[1],player2);
                                    ship_front_tail = [];
                                    player2.board.shipsPlaced++;
                              }
                              else{
                                    ship_front_tail.push([j,i]);  
                              }
                        }
                        else{
                              gameLogic.placing = false;
                              gameLogic.firing = true;
                        }
                        
                  }
            }
            console.log(player1.board)
      }
      else if (gameLogic.firing == true){
            console.log("fire!")
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