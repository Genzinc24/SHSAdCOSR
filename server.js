const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JS) from a 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Initialize SQLite Database
// This creates a file named 'registrar.db' in your folder automatically
const db = new sqlite3.Database('./registrar.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
        // Create the Students table if it doesn't exist yet
        db.run(`
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                dob DATE,
                address TEXT
            )
        `, (err) => {
            if (err) console.error("Error creating table:", err.message);
            else console.log("Students table ready.");
        });
    }
});

// A simple test route to make sure our server is running
app.get('/api/test', (req, res) => {
    res.json({ message: 'Registrar server is up and running offline!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running offline at http://localhost:${PORT}`);
});
