const router = require('express').Router();

const {
    subirPDF
} = require('../controllers/cv.controllers')

router.get('/subirArchivo', subirPDF)

module.exports = router