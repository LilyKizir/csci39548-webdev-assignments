//Get all the table cells
//const all_cells = document.querySelectorAll("td");

//Add click event listener for Fill Button
var fillbtn = document.getElementById("fillbtn");
fillbtn.addEventListener("click", () => {
    var color = document.getElementById("colorPicker").value;
    cells.forEach((cell) => {
        var cellBackgroundColor = window.getComputedStyle(cell).backgroundColor;
        if (cellBackgroundColor === "rgb(255, 255, 255)") {
            cell.style.backgroundColor = color;
        }
    });
});

//Add click event listener for Clear Button
var clearbtn = document.getElementById("clearbtn");
clearbtn.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
});