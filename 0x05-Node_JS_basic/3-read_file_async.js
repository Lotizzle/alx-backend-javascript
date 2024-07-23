const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.trim().split('\n').filter(line => line.trim() !== '');
      const fields = {};
      let totalStudents = 0;

      lines.slice(1).forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');

        if (firstname && lastname && age && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
          totalStudents += 1;
        }
      });

      resolve({ totalStudents, fields });
    });
  });
}

module.exports = countStudents;
