const router = require('express').Router();

const {
    getCVs,
    findOnCv
} = require('../controllers/cv.controllers');
const { validateJWT } = require('../middlewares/validaciones');

router.get('/cv',[validateJWT],getCVs);

router.post('/cv',[validateJWT],findOnCv);
module.exports = router