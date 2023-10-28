import { useState } from "react";

function Table({ rows, columns }) {
  let table = [];

  for (let i = 0; i < rows; i++) {
    let children = [];

    for (let j = 0; j < columns; j++) {
      children.push(<td key={`${i}-${j}`}></td>);
    }

    table.push(<tr key={i}>{children}</tr>);
  }

  return (
    <table>
      <tbody>{table}</tbody>
    </table>
  );
}

export default function Board() {
  const [rowNum, setRowNum] = useState(0);
  const [colNum, setColNum] = useState(0);

  function handleAddRow() {
    if (rowNum === 0 || colNum === 0) {
      setColNum(1);
      setRowNum(1);
    } else {
      setRowNum(rowNum + 1);
    }
  }

  function handleAddCol() {
    if (rowNum === 0 || colNum === 0) {
      setColNum(1);
      setRowNum(1);
    } else {
      setColNum(colNum + 1);
    }
  }

  function handleRemoveRow() {
    if (rowNum > 0) {
      setRowNum(rowNum - 1);
    }
  }

  function handleRemoveCol() {
    if (colNum > 0) {
      setColNum(colNum - 1);
    }
  }

  return (
    <>
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleAddCol}>Add Column</button>
      <button onClick={handleRemoveRow}>Remove Row</button>
      <button onClick={handleRemoveCol}>Remove Column</button>
      <Table rows={rowNum} columns={colNum} />
    </>
  );
}
