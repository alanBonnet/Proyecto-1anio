const { model, Schema } = require("mongoose");
const stringTrim = {
    type:String,
    trim:true
}
const cvSchema = new Schema({
    names: stringTrim,
    address: stringTrim,
    phone: stringTrim,
    email: stringTrim,
    summary: stringTrim,
    skills: stringTrim,
    experiences: stringTrim,
    education: stringTrim,
    languages: stringTrim,
},
{
    versionKey:false,
    timestamps:true
});

const cv = model("cv", cvSchema);

module.exports = cv;
