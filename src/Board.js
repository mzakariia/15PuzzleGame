import "./Board.css";
import Cell from "./Cell.js";

const Board = (props) => {
  const numbers = props.numbers;
  const moves = props.moves;
  const setGrid = props.setGrid;
  const setMoves = props.setMoves;
  const win = props.win;
  const cellOnClickHandler = (index) => {
    if (!win) {
      let indexToSwap = 0;
      let swap = false;
      if (index > 3) {
        if (numbers[index - 4] == 0) {
          indexToSwap = index - 4;
          swap = true;
        }
      }
      if (index < 12) {
        if (numbers[index + 4] == 0) {
          indexToSwap = index + 4;
          swap = true;
        }
      }
      if (index % 4 != 0) {
        if (numbers[index - 1] == 0) {
          indexToSwap = index - 1;
          swap = true;
        }
      }
      if (index != 3 || index != 7 || index != 11 || index != 15) {
        if (numbers[index + 1] == 0) {
          indexToSwap = index + 1;
          swap = true;
        }
      }
      if (swap) {
        let tempArray = [...numbers];
        let temp = tempArray[indexToSwap];
        tempArray[indexToSwap] = tempArray[index];
        tempArray[index] = temp;
        setGrid(tempArray);
      }
      setMoves(moves + 1);
    }
  };
  return (
    <div className="board center">
      {numbers.map((value, index) => {
        return (
          <Cell value={value} index={index} clickHandler={cellOnClickHandler} />
        );
      })}
    </div>
  );
};

export default Board;
