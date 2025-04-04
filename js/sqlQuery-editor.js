document.addEventListener("DOMContentLoaded", function(){
    // Initialize CodeMirror for SQL editor  
    const sqlEditor = CodeMirror.fromTextArea(document.getElementById("sqlQuery"),{
        mode: "text/x-sql",
        theme: "material",
        lineNumbers: true,
        indenthWithTabs: true,
        smartIndent: true,
        matchBrackets: true,
        autofocus: true,
        tabSize: 2,
        lineWrapping: true,
        extraKeys: {
            "Ctrl-Space": "autocomplete",
            "Ctrl-Enter": function(cm) {
                const sqlQuery = cm.getValue();
                runQuery(sqlQuery);
            }
        }
    })

    document.getElementById("sqlQueryBtn").addEventListener("click", function(){
        const sqlQuery = sqlEditor.getValue();
        runQuery(sqlQuery)
    })
})

function runQuery(sqlQuery){
    if(!db){
        console.error("Database not loaded yet!")
        return; 
    }

    if(sqlQuery === ""){
        return;
    }

    try{
        const result = db.exec(sqlQuery);
        // validate that the query starts with SELECT
        if(!sqlQuery.toLowerCase().startsWith("select")){
            document.getElementById("output").innerHTML = "Only select queries are allowed.";
            return;
        }

        if(result.length === 0 || result[0].values.length === 0){
            document.getElementById("output").innerHTML = "No results found.";
            return;
        }
        
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
    let isEncrypted = true;
    const statementColumnIndex = columns.indexOf("statement");
    // create header row
    const headerRow = document.createElement("tr");
    columns.forEach(col => {
        const th = document.createElement("th");
            th.innerText = col;
            headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // create data rows
    rows.forEach(row => {
        const dataRow = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");

            // can cell be filter by statement?
            if(statementColumnIndex !== -1 && cell === row[statementColumnIndex] && isEncrypted){
                td.textContent = "asdf" // highlight the statement column
            }else{
                td.textContent = cell;
            }
            dataRow.appendChild(td);
        });
        table.appendChild(dataRow);
    });

    // replace the output with the table
    const outputContainer = document.getElementById("output");
    outputContainer.innerHTML = ""; // clear previous output
    outputContainer.appendChild(table);
    outputContainer.style.display = "block"; // show the output container
}