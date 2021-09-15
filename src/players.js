class Player {
    constructor(board, ID){
        this.board = board;
        this.player = ID;
    }
}

let board1 = new GameState();
let board2 = new GameState();
let player1 = new Player(board1, 1);
let player2 = new Player(board2, 2);