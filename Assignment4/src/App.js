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
    <table id="tableId">
      <tbody>{table}</tbody>
    </table>
  );
}

export default function Board() {
  // const tableWidth = document.getElementById("tableId").clientWidth;

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
    } else if (
      document.getElementById("tableId").clientHeight >
      window.innerHeight - 60
    ) {
      alert("That is too many rows!");
    } else {
      setRowNum(rowNum + 1);
    }
  }

  function handleAddCol() {
    if (rowNum === 0 || colNum === 0) {
      setColNum(1);
      setRowNum(1);
    } else if (
      document.getElementById("tableId").clientWidth >
      window.innerWidth - 60
    ) {
      alert("That is too many columns!");
    } else {
      setColNum(colNum + 1);
    }
  }

  function handleRemoveRow() {
    if (rowNum > 1) {
      setRowNum(rowNum - 1);
    } else if (rowNum === 1) {
      setRowNum(rowNum - 1);
      setColNum(0);
    } else {
      alert("No more rows to remove!");
    }
  }

  function handleRemoveCol() {
    if (colNum > 1) {
      setColNum(colNum - 1);
    } else if (colNum === 1) {
      setColNum(colNum - 1);
      setRowNum(0);
    } else {
      alert("No more columns to remove!");
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
  }

  function handleClearAll() {
    const table = document.querySelector("table");
    table.querySelectorAll("td").forEach((cell) => {
      cell.style.backgroundColor = "";
    });
  }

  return (
    <>
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleAddCol}>Add Column</button>
      <button onClick={handleRemoveRow}>Remove Row</button>
      <button onClick={handleRemoveCol}>Remove Column</button>
      <button onClick={handleFillAll}>Fill All</button>
      <button onClick={handleUncolored}>Fill Uncolored</button>
      <button onClick={handleClearAll}>Clear</button>
      <label form="colors">
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
