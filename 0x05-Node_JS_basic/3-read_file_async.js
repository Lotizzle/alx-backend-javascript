const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the data by new lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    lines.shift();

    // Initialize a dictionary to count students by field
    const fieldCounts = {};
    const students = [];

    // Iterate through each line and count the students
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      // Ensure that we have all the necessary data before processing
      if (firstname && lastname && age && field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstname);
        students.push(firstname);
      }
    });

    // Print the total number of students
    console.log(`Number of students: ${students.length}`);

    // Print the number of students and list of firstnames for each field
    for (const [field, names] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // If there's an error (e.g., file not found), throw an error with the specified message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
