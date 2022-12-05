const fs = require("fs");

const readFile = (path) => {
  const data = JSON.parse(
    fs.readFileSync(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    })
  );
  return data;
};

module.exports = readFile;