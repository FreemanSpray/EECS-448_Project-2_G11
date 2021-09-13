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
        alert("board 0");
  }
  
  if(a>=0 && a<10 && b>=0 && b<9)
  {
        alert("board 1");
  }
        
})