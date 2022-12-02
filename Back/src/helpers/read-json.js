const fs = require("fs");

const readFile = () => {
  const data = JSON.parse(
    fs.readFileSync("../JSON/archivo.json", "utf-8", (err, data) => {
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