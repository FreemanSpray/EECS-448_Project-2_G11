class Cell{
    constructor(){
        this.filled = false;
        this.hit = false;
        this.miss = false;
    }
}

class GameState{
    constructor(){
        this.grid = new Array(10);
        for(var i = 0; i < this.grid.length; i++){
            this.grid[i] = new Array(9);
            for(var j = 0; j < this.grid[i].length; j++){
                this.grid[i][j] = new Cell();
            }
        }
        console.log(this.grid);
    }
}
