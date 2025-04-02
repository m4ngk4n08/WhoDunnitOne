let db;

async function loadDB(){
    const SQL = await initSqlJs({
        locateFile: file => `./lib/sql-wasm.wasm`
    });


    const db = new SQL.Database();
    db.run("create table users (id INTEGER, name TEXT);")
    db.run("insert into users (id, name) values (1, 'Alice'), (1, 'Bob');")
    console.log("Database initialized.")
    return db;
}

async function runQuery(){
    if(!db){
        console.error("Database not loaded yet!")
        return; 
    }

    const sqlQuery = document.getElementById("sqlQuery").value.trim();

    if(sqlQuery === ""){
        alert("Please enter a SQL query.");
        return;
    }

    try{

        const result = db.exec(sqlQuery);

        if(result.length === 0 || result[0].values.length === 0){
            document.getElementById("output").innerHTML = "No results found.";
            return;
        }
        console.log(result[0].columns, result[0].values);

        displayResultAsTable(result[0].columns, result[0].values);

    } catch(error) {
        document.getElementById("output").innerHTML = "Error: " + error.message;
    }

}

function displayResultAsTable(columns, rows) {

    const table = document.createElement("table");
    table.setAttribute("border", "1");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    // create header row
    const headerRow = document.createElement("tr");
    columns.forEach(col => {
        const th = document.createElement("th");
            th.innerText = col;
            th.style.padding = "8px";
            th.style.textAlign = "left";
            th.style.backgroundColor = "#f2f2f2";
            th.style.borderBottom = "1px solid #ddd";
            headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // create data rows
    rows.forEach(row => {
        const dataRow = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.padding = "8px";
            dataRow.appendChild(td);
        });
        table.appendChild(dataRow);
    });

    // replace the output with the table
    const outputContainer = document.getElementById("output");
    outputContainer.innerHTML = ""; // clear previous output
    outputContainer.appendChild(table);
    outputContainer.style.display = "block"; // show the output container
    // outputContainer.style.overflow = "auto"; // enable scrolling if needed
    // outputContainer.style.maxHeight = "400px"; // set max height for the output container
}

const DatabaseModule = {
    loadDb : async function() {
        db = await loadDB();
    },
    runQuery : async function() {
        await runQuery();
    },
};

DatabaseModule.loadDb();
window.DatabaseModule = DatabaseModule;