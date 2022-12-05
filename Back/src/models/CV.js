const { model, Schema } = require("mongoose");

const cvSchema = new Schema({
    names: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    summary: {
        type: String,
        trim: true,
    },
    skills: {
        type: String,
        trim: true,
    },
    experiences: {
        type: String,
        trim: true,
    },
    education: {
        type: String,
        trim: true,
    },
    languages: {
        type: String,
        trim: true,
    },
});

const cv = model("cv", cvSchema);

module.exports = cv;
