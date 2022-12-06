const router = require('express').Router();

const {
    getCVs
} = require('../controllers/cv.controllers');
const { isAuthorized, validateJWT } = require('../middlewares/validaciones');

router.get('/cv',[validateJWT],getCVs)
module.exports = router