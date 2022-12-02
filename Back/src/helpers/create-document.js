const cv = require("../models/CV");

const createDoc = async (data) => {
  try {
    await cv.create(data);
    console.log("Subido exitosamente");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = createDoc;
