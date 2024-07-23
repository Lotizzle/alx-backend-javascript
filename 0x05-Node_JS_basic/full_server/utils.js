const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    
    const fields = {};

    lines.slice(1).forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');
      
      if (firstname && lastname && age && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    return fields;
  } catch (error) {
    throw new Error(`Cannot load the database`);
  }
}

module.exports = readDatabase;
