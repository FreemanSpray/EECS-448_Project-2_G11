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
let shiplength=0;

function ship_placement_interface(n,clickx,clicky)
{
      for(let i=1; i<=n; i++)
      {
            console.log("Place your length " + i + " ship");
            shiplength=i;
            if (gameLogic.placing == true){
                  if(clicky>=0 && clicky<10 && clickx>=0 && clickx<9){
                        if (gameLogic.player1Turn == true){
                        // peter place a ship on the specific players board after validating that the ship placement is valid
                        ship_front_tail.push([clickx,clicky])
                        console.log(clickx,clicky);
                              if(ship_front_tail.length == 2)
                              {
                                          if(user_length_ship([ship_front_tail[0][0],ship_front_tail[0][1]],[ship_front_tail[1][0],ship_front_tail[1][1]],shiplength)==true)                             
                                          {
                                                console.log(shiplength);
                                                place_ship(ship_front_tail[0], ship_front_tail[1], player1);
                                                number_of_plyr1_placed_ships.push(1);
                                                ship_front_tail.pop();
                                                ship_front_tail.pop();
                                          }
                                          else
                                          {
                                                alert("Wrong ship");
                                          }
                              }

                        
                        }
                  }
            }
      }
}


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

                  
                 
            }
            
      }
      ship_placement_interface(gameLogic.numShips,j,i)

  
      /*if (gameLogic.placing == true){
            if(i>=0 && i<10 && j>=0 && j<9){
                  if (gameLogic.player1Turn == true){
                        if(gameLogic.numShips==1)
                        {
                              shiplength=1;

                        }


                        // peter place a ship on the specific players board after validating that the ship placement is valid
                        ship_front_tail.push([j,i])
                        console.log(j,i)
                        if(ship_front_tail.length == 2)
                        {
                              if(user_length_ship([ship_front_tail[0][0],ship_front_tail[0][1]],[ship_front_tail[1][0],ship_front_tail[1][1]],shiplength)==true)                             {

                                    place_ship(ship_front_tail[0], ship_front_tail[1], player1)
                                    number_of_plyr1_placed_ships.push(1)
                                    ship_front_tail.pop()
                                    ship_front_tail.pop()
                              }
                              else
                              {
                                    alert("Wrong ship");
                              }
                        }
                        if(number_of_plyr1_placed_ships.length == gameLogic.numShips)
                        {
                              gameLogic.player1Turn = false
                              
                              
                              console.log("placed ships: " + number_of_plyr1_placed_ships.length);
                              
                              //console.log("placed ships: " + number_of_placed_ships.length);
                        }
                  }
                  */
                  if(gameLogic.player1Turn == false)
                  {

                        ship_front_tail.push([j,i])
                        console.log(j,i)
                        if(ship_front_tail.length == 2 )
                        {
                              place_ship(ship_front_tail[0], ship_front_tail[1], player2)
                              number_of_plyr2_placed_ships.push(1)
                              ship_front_tail.pop()
                              ship_front_tail.pop()
                        }
                        if(number_of_plyr2_placed_ships.length == gameLogic.numShips)
                        {
                              gameLogic.firing = true
                              console.log("placed ships: " + number_of_plyr1_placed_ships.length);
                              alert("fire shots at opponents board on the right")
                              //gameLogic.player1Turn = true
                              //gameLogic.placing = false;
                              
                        }
                  }
                  
            //}
      //}

      if (gameLogic.firing == true){
            gameLogic.player1Turn = true
            if(a>=0 && a<10 && b>=0 && b<9)
            {
                  if (gameLogic.player1Turn == true){
                        console.log("fire!")
                        fire_missile([b,a], player2)
                        gameLogic.player1Turn = false
                  }
                  else{
                        console.log("fire!")
                        fire_missile([b,a], player1)
                        gameLogic.player1Turn = true
                  }
            }
      }         
})













