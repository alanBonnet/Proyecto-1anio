const router = require('express').Router();

const {
    pdf2text
} = require('../controllers/cv.controllers')

router.post('/extract-text', pdf2text)
module.exports = router