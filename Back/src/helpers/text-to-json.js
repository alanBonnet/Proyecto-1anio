const fs = require("fs");
const path = require("path");

const convertJson = async () => {
  try {
    let Parser = require("text2json").Parser;
    let rawdata = "../data/file_100.txt"
    let parse = new Parser({ hasHeader: true });
    parse
      .text2json(rawdata)
      .on("error", (err) => {
        console.error(err);
        return err
      })
      .on("headers", (headers) => {
        console.log(headers);
        console.log("llega a headers")
      })
      .on("row", (row) => {
        console.log(row);
        console.log("llega a rows")
        return ({ row })
      })
      .on("end", (e) => {
        console.log("Done");

      });
    return parse
  } catch (error) {
    return error
  }
};

module.exports = convertJson;
