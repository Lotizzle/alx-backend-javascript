const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  
  countStudents(databasePath)
    .then((data) => {
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.totalStudents}\n`);
      Object.keys(data.fields).forEach((field) => {
        res.write(`Number of students in ${field}: ${data.fields[field].length}. List: ${data.fields[field].join(', ')}\n`);
      });
      res.end();
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
