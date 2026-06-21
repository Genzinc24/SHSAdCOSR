const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database('./registrar.db', (err) => {
  if (err) console.error(err);
  else {
    console.log("Database connected");

    db.run(`
      CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        last_name TEXT
      )
    `);
  }
});

app.get('/api/test', (req, res) => {
  res.json({ message: "Server running" });
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});