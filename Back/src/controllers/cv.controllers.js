const cvModel  = require('../models/CV')

const pdfParse = require("pdf-parse");

const cvCtrl = {};


cvCtrl.pdf2text = async (req, res) => {
    try {
        if (!req.files && !req.files.pdfFile) {
            res.status(400);
            res.end();
        }

        pdfParse(req.files.pdfFile).then((result) => {
            res.send(result.text);
        });
    } catch (error) {
        res.json({msg:"hubo un error con el parsing ",error:error.message})
    }
}

cvCtrl.getCVs = async (req, res) => {
    try {
        const allCV = await cvModel.find();
        return res.json(allCV)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error con traer los CV",
            error:error.message
        })
    }
}
cvCtrl.findOnCv = async (req, res) => {
    try {
        const criterios =req.body;
        const allCV = await cvModel.find({$and:[...criterios]})
        return res.json(allCV)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error con traer los CV",
            error:error.message
        })
    }
}
module.exports = cvCtrl