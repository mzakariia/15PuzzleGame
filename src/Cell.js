import "./Cell.css";

const Cell = (props) => {
  const number = props.value;
  const index = props.index;
  const cellOnClickHandler = props.clickHandler;

  const render = (number) => {
    if (!number) {
      return (
        <p
          className="cell"
          id={index}
          onClick={() => {
            cellOnClickHandler(index);
          }}
        />
      );
    }
    return (
      <p
        className="cell filled"
        id={props.index}
        onClick={() => {
          cellOnClickHandler(index);
        }}
      >
        {number}
      </p>
    );
  };
  return render(number);
};

export default Cell;
