/*/*
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
* @pre User clicks coordiantes for start point and end point for ship
* @param [x,y] representing the first coord and [m,n] representing the second coordiante, distance is set to the appropiate distance corresponding to the ship length.
* @post Returns true if endpoints match distance of ship false if otherwise
*/
function user_length_ship2([x,y],[m,n],distance)
{
      if(Math.abs(x-m)==distance||Math.abs(y-n)==distance)
      {
            return [Math.abs(x-m),distance]
            return true;
      }
      else
      {
            return [Math.abs(x-m),distance]
            return false;
      }


};

function user_length_ship([x,y],[m,n],distance)
{
      if(Math.abs(x-m)==distance||Math.abs(y-n)==distance)
      {
            return true;
      }
      else
      {
            return false;
      }


};
let shiplength=1;//keeps track of length of ship that user is placing
let shipplaced=true;//keeps track of wether ship was placed succesfully
let boardfreezestate=0; //freezes board when it equals 1 and player transtition is happening

/*
* @pre User clicks screen to indicate wher ship should be placed
* @param n which represents the length of the ship being placed, shipplaced which describes if the ship placement was successful
* @post Alerts user to place certain ship and passes control to click event to verify if ship placement was successful.
*/
function ship_placement_interface(n,shipplaced)
{
            alert("Place your length " + n + " ship");
            shiplength=n;  
      
            
}
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
                  alert("Place your length 1 ship")
                  gameLogic.pickNumShips = false;
                  gameLogic.placing = true;

                  
                 
            }
            
      }
      //sequence of if statements to verify and execute ship placement on based on a variety of factors
      
      else if (gameLogic.placing == true){
            if(i>=0 && i<10 && j>=0 && j<9){
                  if (gameLogic.player1Turn == true){
                        // peter place a ship on the specific players board after validating that the ship placement is valid
                        ship_front_tail.push([j,i])
                        console.log(j,i,' player1')
                        if(number_of_plyr1_placed_ships == 0){
                              ship_front_tail.push([j,i])
                        }
                        if(ship_front_tail.length == 2)
                        {
                              if(user_length_ship([ship_front_tail[0][0],ship_front_tail[0][1]],[ship_front_tail[1][0],ship_front_tail[1][1]],shiplength-1)==true)
                              {
                                    try
                                    {
                                          place_ship(ship_front_tail[0], ship_front_tail[1], player1)
                                          let ship = new Ship(get_all_ship_cells(ship_front_tail[0], ship_front_tail[1]))
                                          all_player1_ships.push(ship)
                                          shiplength=shiplength+1;
                                          number_of_plyr1_placed_ships += 1
                                          shipplaced = true
                                          
                                    } 
                                    catch(error)
                                    {
                                          console.log(error)
                                          alert(error)
                                          shipplaced = false
                                          
                                    }
                                    if(shipplaced = false)
                                    {
                                          try
                                          {
                                                
                                                place_ship(ship_front_tail[0], ship_front_tail[1], player1)
                                                let ship = new Ship(get_all_ship_cells(ship_front_tail[0], ship_front_tail[1]))
                                                all_player1_ships.push(ship)
                                                shiplength=shiplength+1;
                                                number_of_plyr1_placed_ships += 1
                                                shipplaced = true
                                                
                                          } 
                                          catch(error)
                                          {
                                                console.log(error)
                                                alert(error)
                                                shipplaced = false
                                          }
                                    }             
                                    ship_front_tail.pop()
                                    ship_front_tail.pop()
                                    if(shiplength<=gameLogic.numShips)
                                    {
                                          ship_placement_interface(shiplength,shipplaced);
                                    }
                              }
                              else
                              {
                                    alert("Ship has incorrect length");
                                    ship_front_tail.pop()
                                    ship_front_tail.pop()
                                    ship_placement_interface(shiplength,shipplaced);
                              }
                        }
                        if(number_of_plyr1_placed_ships == gameLogic.numShips)
                        {
                              
                              console.log("placed ships: " + number_of_plyr1_placed_ships);
                              boardfreezestate=1;
                              drawDoneTurnButton();
                              gameLogic.player1Turn = false;
                              gameLogic.player2Turn = false;        
                        }
                              
                  }
                  else if(gameLogic.player2Turn == true)
                  {
                        ship_front_tail.push([j,i])
                        if(number_of_plyr2_placed_ships == 0){
                              ship_front_tail.push([j,i])
                        }
                        if(ship_front_tail.length == 2)
                        {
                              if(user_length_ship([ship_front_tail[0][0],ship_front_tail[0][1]],[ship_front_tail[1][0],ship_front_tail[1][1]],shiplength-1)==true)
                              {
                                    try
                                    {
                                          place_ship(ship_front_tail[0], ship_front_tail[1], player2)
                                          let ship = new Ship(get_all_ship_cells(ship_front_tail[0], ship_front_tail[1]))
                                          all_player2_ships.push(ship)
                                          shiplength=shiplength+1;
                                          number_of_plyr2_placed_ships += 1
                                          shipplaced = true
                                          
                                    } 
                                    catch(error)
                                    {
                                          console.log(error)
                                          alert(error)
                                          shipplaced = false
                                          
                                    }
                                    if(shipplaced = false)
                                    {
                                          try
                                          {
                                                
                                                place_ship(ship_front_tail[0], ship_front_tail[1], player2)
                                                let ship = new Ship(get_all_ship_cells(ship_front_tail[0], ship_front_tail[1]))
                                                all_player2_ships.push(ship)
                                                shiplength=shiplength+1;
                                                number_of_plyr2_placed_ships += 1
                                                shipplaced = true
                                                
                                          } 
                                          catch(error)
                                          {
                                                console.log(error)
                                                alert(error)
                                                shipplaced = false
                                          }
                                    }             
                                    ship_front_tail.pop()
                                    ship_front_tail.pop()
                                    if(shiplength<=gameLogic.numShips)
                                    {
                                          ship_placement_interface(shiplength,shipplaced);
                                    }
                              }
                              else
                              {
                                    alert("Ship has incorrect length");
                                    ship_front_tail.pop()
                                    ship_front_tail.pop()
                                    ship_placement_interface(shiplength,shipplaced);
                              }
                        }
                        if(number_of_plyr2_placed_ships == gameLogic.numShips)
                        {
                              console.log("placed ships: " + number_of_plyr2_placed_ships);
                              boardfreezestate=1;
                              drawDoneTurnButton();
                              gameLogic.player1Turn = true;
                              gameLogic.player2Turn = false;
                              gameLogic.placing =false;
                              
                        }
                  }
                  

            }

            endTurnshipplacing(e.x,e.y);
      }
            transition(e.x,e.y);



    
     if (gameLogic.firing == true){
            alert("fire at opponents ships on the right board")
            if(a>=0 && a<10 && b>=0 && b<9)
            {
                  console.log(gameLogic.player1Turn, gameLogic.player2Turn)
                  if (gameLogic.player1Turn == true){
                        temp_player = 1;
                        console.log("fire!")
                        fire_missile([b,a], player2)
                        sink_ships(player2)
                        boardfreezestate=1;
                        drawDoneTurnButton();
                        gameLogic.player1Turn = false;
                  }
                  else if(gameLogic.player2Turn==true)
                  {
                        temp_player = 2;
                        console.log("fire!")
                        fire_missile([b,a], player1)
                        sink_ships(player1)
                        boardfreezestate=1;
                        drawDoneTurnButton();
                        gameLogic.player2Turn = false;
                  } 
            }
            if(gameLogic.player1Turn==false && gameLogic.player2Turn==false){
                  endTurngame(e.x,e.y, temp_player);
            }
            

      }

      if(boardfreezestate==0)
      {
            drawTemplate();
            drawPlayersShipsDuringTurn();
            drawHitsAndMissesDuringTurn(); 
            drawShipConnections();
      }
            
});















