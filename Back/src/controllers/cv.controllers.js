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
module.exports = cvCtrl