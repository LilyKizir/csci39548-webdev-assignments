// Get all the table cells
const cells = document.querySelectorAll("td");

// Add click event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    var color = document.getElementById("colorPicker").value;
    this.style.backgroundColor = color;
  });
});
