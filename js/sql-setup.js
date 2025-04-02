let db;

async function loadDB(sqlFilePaths = []){
    const SQL = await initSqlJs({
        locateFile: file => `./lib/sql-wasm.wasm`
    });

    const db = new SQL.Database();
    
    if(sqlFilePaths.length > 0){
        try{
            for(const sqlFilePath of sqlFilePaths){
                // fetch sql file
                const response = await fetch(sqlFilePath);
                if(!response.ok){
                    throw new Error(`failed to load SQL File ${sqlFilePath}: ${response.statusText}`);
                }

                // read the sql file content
                const sqlScript = await response.text();

                // execute the sql script
                db.exec(sqlScript);
            }
        }catch(error){
            //console.error("Error loading SQL file:", error);
            console.log("Error loading SQL file:", error.message);
        }
    } else{
        db.run("create table users (id INTEGER, name TEXT);")
        db.run("insert into users (id, name) values (1, 'Alice'), (1, 'Bob');")
        console.log("Database initialized manually.")
    } 

    return db;
}

async function runQuery(){
    if(!db){
        console.error("Database not loaded yet!")
        return; 
    }

    const sqlQuery = document.getElementById("sqlQuery").value.trim();
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
        // console.log(result[0].columns, result[0].values);

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
    loadDb : async function(sqlFilePaths) {
        db = await loadDB(sqlFilePaths);
    },
    runQuery : async function() {
        await runQuery();
    },
    // make db accessible from outside
    get db() {
        return db;
    },
};

DatabaseModule.loadDb([
    './sql/whodunnitone_crime_scene.sql',
    './sql/whodunnitone_evidence.sql',
    './sql/whodunnitone_guest_list.sql',
    './sql/whodunnitone_people.sql',
    './sql/whodunnitone_people_info.sql',
    './sql/whodunnitone_security_footage.sql',
    './sql/whodunnitone_statement.sql'
]).then(()=> {
    console.log("Database loaded successfully!");
    document.getElementById("checkKeyBtn").disabled = false; // Enable the button after loading the database
}).catch((error) => {
    console.error("Error loading database:", error);
});

window.DatabaseModule = DatabaseModule;