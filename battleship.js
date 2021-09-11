let canvas;
let context;

function drawTemplate(){
    context.clearRect(0,0,canvas.width,canvas.length);

    context.font = "50px Times New Roman";
    let gradient = context.createLinearGradient(0,0,canvas.width, 0);
    gradient.addColorStop("0", "black");
    gradient.addColorStop("1", "red");
    context.fillStyle = gradient;
    context.fillText("BattleShip", 650, 50)
    context.stroke();

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "green";
    context.rect(75,75,550,550);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.rect(875,75,550,550);
    context.stroke();

    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for(let x=0; x<10;x++){
        context.font = "30px Verdana";
        context.fillStyle = "black";
        context.fillText(letters[x], 102.5 + 55*x, 70);
        context.fillText(letters[x], 902.5 + 55*x, 70);
    }
    for(let x=1; x<=9; x++){
        context.font = "30px Verdana";
        context.fillStyle = "black";
        context.fillText(x, 55, 105.5 + (x-1)*61.1);
        context.fillText(x, 1425, 105.5 + (x-1)*61.1);
    }
    for (let x=0; x<9; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(130+(55*x),75);
        context.lineTo(130+(55*x), 625);
        context.stroke();
    }
    for (let x=0; x<9; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(930+(55*x),75);
        context.lineTo(930+(55*x), 625);
        context.stroke();
    }
    for(let x=0; x<8; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(75, 136.1+(x*61.1));
        context.lineTo(625, 136.1+(x*61.1));
        context.stroke();
    }
    for(let x=0; x<8; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(875, 136.1+(x*61.1));
        context.lineTo(1425, 136.1+(x*61.1));
        context.stroke();
    }
    
}

function drawStartUI(){
    //context.font = "30px Times New Roman"
    //context.fillStyle = "Black"
    //context.fillText("Welcome to BattleShip. Choose how many ships you will be playing with!", 650,100, [200])
}

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    if (canvas != null){
        context = canvas.getContext("2d");
    } 
    drawTemplate();
    drawStartUI();
  })

function roundMegreenhorz(x){ return Math.floor(((x-85)/55))}
function roundMegreenvert(y){return Math.floor(((y-85)/61.1))}
function roundMeredhorz(x){ return Math.floor(((x-885)/55))}
function roundMeredvert(y){return Math.floor(((y-85)/61.1))}
document.addEventListener("click", e => {
  const [i] = [e.x].map(roundMegreenhorz);
  const [j] = [e.y].map(roundMegreenvert);
  const[a]=[e.x].map(roundMeredhorz);
  const[b]=[e.y].map(roundMeredvert);
  if(i>=0 && i<10 && j>=0 && j<9)
  {
        alert("board 1");
  }
  
  if(a>=0 && a<10 && b>=0 && b<9)
  {
        alert("board 2");
  }
        
})
