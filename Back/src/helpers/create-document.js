const cv = require("../models/CV");

const createDoc = async (data) => {
  try {
    await cv.create(data);
    return ("Subido exitosamente");
  } catch (error) {
    console.log("error", error);
    return error
  }
};

module.exports = createDoc;
