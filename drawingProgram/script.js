//initialization function to insert cells into the table
function createCanvas() {
    var side = 100;
    var tbody = document.getElementById("tablebody");

    for(var i=0; i< side; i++) {
        var row = document.createElement("tr");
        for(var j=0; j < side; j++) {
            var cell = document.createElement("td");
            cell.onmousemove = processMouseMove;
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }
}

// processes the onmousemove event
function processMouseMove(e) {
    if(!e)
        var e = window.event;

    //turn the cell blue if ctrl-key is pressed
    if(e.ctrlKey)
        this.style.backgroundColor = "blue";
    //turn the cell red if shift-key is pressed
    if(e.shiftKey)
        this.style.backgroundColor = "red";
}
