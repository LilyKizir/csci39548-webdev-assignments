
const MakeAllCellsClickable = () => {
  //Get all the table cells
var cells = document.querySelectorAll("td");

// Add click event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    var color = document.getElementById("colorPicker").value;
    this.style.backgroundColor = color;
  });
});
}
