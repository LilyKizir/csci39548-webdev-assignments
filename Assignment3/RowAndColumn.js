//Document contains the functions to Add and Remove Rows and Columns.
window.onload = function (){
    //Add Row function
    var AddRowButton = document.getElementById("AddRow");

    AddRowButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");
        if(table.rows.length === 0){
            table.insertRow();
            table.rows[0].insertCell();
        }
        else{
            let columns = table.rows[0].cells.length;
            let row = table.rows.length;
            table.insertRow(row);
            for(let i=0;i<columns;i++){
                table.rows[row].insertCell();
            }
        }
    })

    //Remove Row Function
    var RemoveRowButton = document.getElementById("RemoveRow");

    RemoveRowButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");

        if(table.rows.length !== 0){
            table.deleteRow(-1);
        }
    });

    //Add Column Function
    var AddColumnButton = document.getElementById("AddColumn");

    AddColumnButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");

        for(let i=0;i<table.rows.length;i++){
            table.rows[i].insertCell(-1);
        }
    });

    //Remove Column Function
    var RemoveColumnButton = document.getElementById("RemoveColumn");

    RemoveColumnButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");

        for(let i=0;i<table.rows.length;i++){
            table.rows[i].deleteCell(-1);
        }
    });
}
