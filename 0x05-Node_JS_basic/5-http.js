const http = require('http');
const url = require('url');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    lines.shift();

    const fieldCounts = {};
    const students = [];

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstname);
        students.push(firstname);
      }
    });

    let output = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fieldCounts)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);
  res.setHeader('Content-Type', 'text/plain');

  if (reqUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    const dbPath = process.argv[2];
    if (!dbPath) {
      res.statusCode = 500;
      res.end('Cannot load the database');
      return;
    }

    try {
      const output = await countStudents(dbPath);
      res.statusCode = 200;
      res.end(`This is the list of our students\n${output}`);
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
