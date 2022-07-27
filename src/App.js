import "./App.css";
import Board from "./Board.js";
import { useState } from "react";

const App = () => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  const [win, setWin] = useState(false);
  const [moves, setMoves] = useState(0);
  const [grid, setGrid] = useState(
    shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  );
  const isSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    setWin(true);
    return true;
  };

  const reset = () => {
    setWin(false);
    setMoves(0);
    setGrid(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
  };
  return (
    // <div className="fullGame">
    //
    <div className="game">
      <h1> 15 puzzle game by Mohamed Zakaria</h1>
      <Board
        numbers={grid}
        setGrid={setGrid}
        setMoves={setMoves}
        moves={moves}
        win={win}
      />
      <div className="extras">
        {isSorted(grid) ? <p className="win">YOU WIN!</p> : null}
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <p className="moves">Moves: {moves} </p>
      </div>
    </div>
    //</div>
  );
};

export default App;
