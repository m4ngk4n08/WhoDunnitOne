function checkKey() {
    const inputElement = document.getElementById("decryptionKey");
    if (!inputElement) {
        console.error("Decryption input field not found.");
        return;
    }

    const key = inputElement.value.trim();
    if (!key) {
        console.error("Decryption key is empty.");
        document.getElementById("decryptionResult").innerHTML = "Please enter a decryption key.";
        return;
    }

    if (!window.DatabaseModule || !window.DatabaseModule.db) {
        console.error("Database not loaded. Please load the database first.");
        document.getElementById("decryptionResult").innerHTML = "Error: Database not loaded. Please try again later.";
        return;
    }

    try {
        const db = window.DatabaseModule.db;
        const res = db.exec("SELECT lower(description) FROM evidence WHERE description = ?;", [key]);
        
        console.log(res)
        const storedKey = res[0].values[0][0];
        // change to lowercase to match the key in the database
        const lowerKey = key.toLowerCase();
        if (lowerKey === storedKey) {
            alert("Key is correct! Decrypting the message...");
            db.run("UPDATE statement SET decrypted_text = 'the heirloom was never stolen!'");
            const decryptedRes = db.exec("SELECT decrypted_text FROM statement;");
            document.getElementById("decryptionResult").innerHTML = "Decrypted message: " + decryptedRes[0].values[0][0];
        } else {
            document.getElementById("decryptionResult").innerHTML = "Wrong Key! Try Again.";
        }
    } catch (error) {
        console.error("Error executing SQL query:", error);
        document.getElementById("decryptionResult").innerHTML = "Error executing SQL query: " + error.message;
    }
}