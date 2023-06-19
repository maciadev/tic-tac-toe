import { WINNER_COMBOS } from "../../constants";

export const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (board[Math.floor(a/3)][a%3] && board[Math.floor(a/3)][a%3] === board[Math.floor(b/3)][b%3] && board[Math.floor(a/3)][a%3] === board[Math.floor(c/3)][c%3]) return true;
    }
    return false;
}

export const checkFullBoard = (board) => {
    return board.every(row => row.every(col => col !== null) )
}