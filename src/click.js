

//minor bug: clicking a tile after completing player 1 setup but before passing to player 2 gives an incorrect ship length message.

/** 
* @pre 
* @param x represents x coordinate passed in from coordinate pair
* @post Converts x coordinate of screen to x value of cell on green board.
*/
function roundMegreenhorz(x){ return Math.floor(((x-85)/55))}
/** 
* @pre 
* @param y represents y coordinate passed in from coordinate pair
* @post Converts y coordinate of screen to y value of cell on green board.
*/
function roundMegreenvert(y){return Math.floor(((y-85)/61.1))}
/** 
* @pre 
* @param x represents x coordinate passed in from coordinate pair
* @post Converts x coordinate of screen to x value of cell on red board.
*/
function roundMeredhorz(x){ return Math.floor(((x-885)/55))}
/** 
* @pre 
* @param y represents y coordinate passed in from coordinate pair
* @post Converts y coordinate of screen to y value of cell on red board.
*/
function roundMeredvert(y){return Math.floor(((y-85)/61.1))}


/** 
* @pre User clicks coordiantes for start point and end point for ship
* @param [x,y] representing the first coord and [m,n] representing the second coordiante, distance is set to the appropiate distance corresponding to the ship length.
* @post Returns true if endpoints match distance of ship false if otherwise
*/

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

/** 
* @pre User clicks screen to indicate wher ship should be placed
* @param n which represents the length of the ship being placed, shipplaced which describes if the ship placement was successful
* @post Alerts user to place certain ship and passes control to click event to verify if ship placement was successful.
*/
function ship_placement_interface(n,shipplaced)
{
            alert("Place your length " + n + " ship on the left green grid by clicking the starting and ending cells");
            shiplength=n;  
      
            
}
/** 
* @pre User clicks on screen
* @param e represents x,y coordiante pair for where user clicked on screen.
* @post Performs variety of tasks depending on where user clicked 
*/


document.addEventListener("click", e => {
      const [i] = [e.x].map(roundMegreenhorz);
      const [j] = [e.y].map(roundMegreenvert);
      const[a]=[e.x].map(roundMeredhorz);
      const[b]=[e.y].map(roundMeredvert); 
      /** 
            * @pre User clicks button for choosing number of ships
            * @param gameLogic.pickNumShips  determines what button was clicked
            * @post Sets gameLogic.numShips to appropiate value based on button clicked
      */

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
                  boardfreezestate = 0;
                  gameLogic.pickNumShips = false;
                  gameLogic.pickOpponent = true;
                  
                 
            }
            
      }


      /** 


            *  @pre User clicks button for selecting opponent
            *  @param e from the click event and variables from game.js class
            *  @post Sets gameLogic.opponent to appropriate value based on button clicked
      */

      else if (gameLogic.pickOpponent == true) {
          if (e.x >= 660 && e.x <= 860)//checks to see what button is clicked for opponent selection and sets opponent to appropiate value
          {
              if (e.y >= 210 && e.y <= 250) {
                  gameLogic.opponent = 1;
              }
              else if (e.y >= 260 && e.y <= 300) {
                  gameLogic.opponent = 2;
              }
              else if (e.y >= 310 && e.y <= 350) {
                  gameLogic.opponent = 3;
              }
              else if (e.y >= 360 && e.y <= 400) {
                  gameLogic.opponent = 4;
              }
              gameLogic.pickOpponent = false;
              gameLogic.pickGameMode = true;
          }
      }


      /** 

            *  @pre User clicks button for selecting game mode
            *  @param e from the click event and variables from game.js class
            *  @post Sets gameLogic.gameMode to appropriate value based on button clicked
      */

      else if (gameLogic.pickGameMode == true) {
          if (e.x >= 660 && e.x <= 860)//checks to see what button is clicked for game mode selection and sets gameMode to appropiate value
          {
              if (e.y >= 210 && e.y <= 250) {
                  gameLogic.gameMode = 1; //standard gamemode
              }
              else if (e.y >= 260 && e.y <= 300) {
                  gameLogic.gameMode = 2; //mirrors shots across both boards (custom feature).
              }
              gameLogic.pickGameMode = false;
              gameLogic.placing = true;
              alert("Place your length 1 ship on the left green grid")
          }
      }


      //sequence of if statements to verify and execute ship placement on based on a variety of factors
      /** 
            * @pre User clicks points where they want ships to be placed
            *  @param e from the click event and variables from game.js class
            *  @post Places ships for both players
      */
      

      else if (gameLogic.placing == true){
            if(i>=0 && i<10 && j>=0 && j<9){
                  if (gameLogic.player1Turn == true){
                        // peter place a ship on the specific players board after validating that the ship placement is valid
                        ship_front_tail.push([j,i])
                        if(number_of_plyr1_placed_ships == 0){ //when placing size one ship, a single click is needed.
                              ship_front_tail.push([j,i])
                        }
                        if(ship_front_tail.length == 2) //runs when two clicks have been made.
                        {
                              if(user_length_ship([ship_front_tail[0][0],ship_front_tail[0][1]],[ship_front_tail[1][0],ship_front_tail[1][1]],shiplength-1)==true) //checks length, allows diagonals
                              {                       //           xPos of click1       yPos of click1           xPos of click2        yPos of click2
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
                              
                              boardfreezestate = 1;
                              drawPlayersShipsDuringTurn();
                              drawShipConnections();
                              drawDoneTurnButton();
                              gameLogic.player1Turn = false;
                              gameLogic.player2Turn = false;        
                        }
                              
                  }
                  else if(gameLogic.player2Turn == true && gameLogic.opponent == 1)
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
                              boardfreezestate = 1;
                              drawPlayersShipsDuringTurn();
                              drawShipConnections();
                              drawDoneTurnButton();
                              gameLogic.player1Turn = true;
                              gameLogic.player2Turn = false;
                              gameLogic.placing =false;
                              
                        }
                  }
                  

            }

            endTurnshipplacing(e.x,e.y);//ends ship placing for both users
      }
            transition(e.x,e.y);//transitions to firing and missing turns



    /** 
            * @pre User clicks button for to fire at ships
            * @param gameLogic class and e from click event
            * @post Draws fire or miss result on both player boards
      */

     if (gameLogic.firing == true){
            if(a>=0 && a<10 && b>=0 && b<9)
            {
                  if (gameLogic.player1Turn == true){
                        gameLogic.temp_player = 1;
                        fire_missile([b,a], player2)
			      if (gameLogic.gameMode == 2){			//mirror functionality - a shot on player 2 is mirrored on player 1's board.
				      fire_missile([b,a], player1);
                        }
                        sink_ships(player1) //sinking both players' ships (regardless of mode, no ship will change to sunk status when this is called if it has not been hit)
			      sink_ships(player2)
                        win_check()
                        gameLogic.startTurn = false;
                        boardfreezestate=1;
                        drawDoneTurnButton();
                        gameLogic.player1Turn = false;
                  }
                  else if(gameLogic.player2Turn==true && gameLogic.opponent == 1)
                  {
                        gameLogic.temp_player = 2;
                        fire_missile([b,a], player1)
			      if (gameLogic.gameMode == 2){   		//mirror functionality - a shot on player 2 is mirrored on player 1's board.
				      fire_missile([b,a], player2);
			      }
                        sink_ships(player2) //sinking both players' ships (regardless of mode, no ship will change to sunk status when this is called if it has not been hit)
                        sink_ships(player1)
                        win_check()
                        boardfreezestate=1;
                        gameLogic.startTurn = false;
                        drawDoneTurnButton();
                        gameLogic.player2Turn = false;
                  }
            }
            if(gameLogic.player1Turn==false && gameLogic.player2Turn==false){
                  endTurngame(e.x,e.y, gameLogic.temp_player);
            }
            

      }

      //checks to see if board is not frozen so everything is redrawn
      if(boardfreezestate==0)
      {
            drawTemplate();
          if (gameLogic.pickOpponent == true) {
              drawAiSelection();
          }
          else if (gameLogic.pickGameMode == true) {
              drawModeSelection();
          }
            drawPlayersShipsDuringTurn();
            drawHitsAndMissesDuringTurn(); 
            drawShipConnections();
      }
            
});















