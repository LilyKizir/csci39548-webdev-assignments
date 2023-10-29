import { useState } from "react";

function MyTD({ dataKey, colorGiven }) {
  const [color, setColor] = useState("");
  return (
    <td
      key={dataKey}
      style={{ background: color }}
      onClick={() => setColor(colorGiven)}
    ></td>
  );
}

function MyTable({ rows, columns, cellClickColor }) {
  let table = [];

  for (let i = 0; i < rows; i++) {
    let children = [];

    for (let j = 0; j < columns; j++) {
      var key = `${i}-${j}`;
      children.push(<MyTD key={key} colorGiven={cellClickColor}></MyTD>);
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
  const [color, setColor] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

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

  const handleUncolored = () => {
    const table = document.querySelector("table");
    table.querySelectorAll("td").forEach((cell) => {
      if (cell.style.backgroundColor === "") cell.style.backgroundColor = color;
    });
  };

  function handleFillAll() {
    const table = document.querySelector("table");
    table.querySelectorAll("td").forEach((cell) => {
        cell.style.backgroundColor = color;
    });
  };

  function handleClearAll() {
    //Uriel TODO
  }

  return (
    <>
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleAddCol}>Add Column</button>
      <button onClick={handleRemoveRow}>Remove Row</button>
      <button onClick={handleRemoveCol}>Remove Column</button>
      <button onClick={handleFillAll}>Fill All</button>
      <button onClick={handleUncolored}>Fill Uncolored</button>
      <button onClick={null}>Clear</button>
      <label for="colors">
        <select name="color" id="colorPicker" onChange={handleColorChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="pink">Pink</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="cyan">Cyan</option>
          <option value="magenta">Magenta</option>
          <option value="brown">Brown</option>
          <option value="gray">Gray</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="violet">Violet</option>
          <option value="indigo">Indigo</option>
          <option value="teal">Teal</option>
          <option value="lime">Lime</option>
          <option value="maroon">Maroon</option>
          <option value="navy">Navy</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="turquoise">Turquoise</option>
          <option value="lavender">Lavender</option>
        </select>
      </label>
      <MyTable rows={rowNum} columns={colNum} cellClickColor={color} />
    </>
  );
}
