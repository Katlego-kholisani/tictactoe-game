import './styles.scss';
import { useState } from "react";
import Board from './components/Board';
import {calculateWinner} from './winner';

function App() {
    const [squares, setSquares] =  useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const winner = calculateWinner(squares);
    const nextPlayer = isXNext ? 'X' : 'O';
    const isDraw = !winner && squares.every(square => square !== null);
    const statusMessage = winner ? `Winner is ${winner}` : isDraw ? "Game is a draw!" : `Next player is ${nextPlayer}`;

    console.log(winner);

    const handleSquareClick = (clickedPosition) => {
      if (squares[clickedPosition] || winner || isDraw) {
          return;
      }

      setSquares((currentSquares) => {
          return currentSquares.map((squareValue, position) => {
              if (clickedPosition === position) {
                  return isXNext ? 'X' : 'O';
              }
              return squareValue;
          });
      });

      setIsXNext((currentIsXNext) => !currentIsXNext);
  };


  return (
    <div className='app'>
      <h2 className={winner ? "text-green" : "text-orange"}>
            {statusMessage}
      </h2>
      <Board squares={squares} handleSquareClick = {handleSquareClick}/>
    </div>

  );
}

export default App
