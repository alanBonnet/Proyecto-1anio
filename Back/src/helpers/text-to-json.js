const fs = require("fs");
let Parser = require("text2json").Parser;
let rawdata = "../data/file_100.txt";

const convertJson = async () => {
  let parse = new Parser({ hasHeader: true });
  parse
    .text2json(rawdata)
    .on("error", (err) => {
      console.error(err);
    })
    .on("headers", (headers) => {
      console.log(headers);
    })
    .on("row", (row) => {
      console.log(row);
      fs.writeFile(
        "../JSON/archivo.json",
        JSON.stringify(row),
        "utf8",
        (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        }
      );
    })
    .on("end", (e) => {
      console.log("Done");
    });
};

module.exports = convertJson;
