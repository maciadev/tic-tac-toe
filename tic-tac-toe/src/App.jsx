import { useState } from 'react'
import { Cell } from './assets/components/Cell'
import { TURNS } from './constants'
import { checkWinner, checkFullBoard } from './assets/logic/game'

function App() {
  const numRows=3
  const numCols=3

  const initBoard = Array(numRows)
  .fill(null)
  .map(() => Array(numCols).fill(null))

  const [board, setBoard] = useState(initBoard)
  const [turn, setTurn] = useState(TURNS.PlayerA)
  const [winner, setWinner] = useState(null)

  const updateBoard = (rowIndex, colIndex) => {
    if (winner !== null) return;
    if(board[rowIndex][colIndex] !== null) return;

    const newBoard = [... board]
    newBoard[rowIndex][colIndex] = turn
    setBoard(newBoard)

    const isWinner = checkWinner(newBoard)
    if (isWinner) {
      setWinner(turn) 
      return;
    }
    if (checkFullBoard(newBoard)) setWinner(false)

    const newTurn = turn === TURNS.PlayerA ? TURNS.PlayerB : TURNS.PlayerA
    setTurn(newTurn)

  }

  const resetGame = () => {
    setBoard(initBoard)
    setTurn(TURNS.PlayerA)
    setWinner(null)

  }

  return (
    <main class="board">
      <h1>Tic Tac Toe</h1>
      <div class="utility">
        <button class="reset_button" onClick={resetGame}>Reset Game</button>
      </div>
      <section className='game'>
        <table className='game__board'>
          <tbody>
            {board.map((row, rowIndex) => {
              return (
              <tr className="game__row" key={rowIndex}>
                {row.map((col, colIndex) => {
                  return(
                  <Cell
                    updateBoard={updateBoard}
                    rowIndex = {rowIndex}
                    colIndex = {colIndex}
                    >
                      {board[rowIndex][colIndex]}
                  </Cell>
                  )
                })}
              
              </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      <section className="winner">
            <span className="winner_text">{winner!==null ? (winner===false ? "Empate" : "Ganador: " + winner) : ''}</span>
      </section>
    </main>
  )
}

export default App
