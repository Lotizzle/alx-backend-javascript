const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const fields = {};
      let totalStudents = 0;

      lines.slice(1).forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');

        if (firstname && lastname && age && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
          totalStudents += 1;
        }
      });

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, students] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
