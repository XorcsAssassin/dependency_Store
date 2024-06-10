const { readFile } = require('fs').promises; // Use the promises API

const getText = async (path) => {
  try {
    const data = await readFile(path, 'utf-8');
    return data;
  } catch (err) {
    throw err;
  }
};

const displayText = async () => {
  try {
    const result = await getText('./content/first.txt');
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

displayText();
console.log("Hello World")