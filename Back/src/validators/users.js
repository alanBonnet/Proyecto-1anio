const userModel = require('../models/USER')

const { check } = require('express-validator')

const { validateResult } = require('../middlewares/validaciones')

const validate = {}

validate.create = [
    check('username')
        .exists({checkNull:true}).withMessage('Falta el nombre de usuario')
        .isLength({min:8}).withMessage('La extensión debe ser mayor o igual a 8')
        .custom(async(username, {req})=>{
            const existUsername = await userModel.find({username:username})
            if(existUsername.length){
                throw new Error(`El usuario ya existe`)
            }
            return true
        } )
        .not()
        .isEmpty().withMessage('Campo vacío')
        .contains(['admin','4dm1n','Adm1n','4admin']).withMessage('No puede crear una cuenta con nombre de usuario admin'),
    check('password')
        .exists({checkNull:true}).withMessage('Falta la contraseña')
        .isLength({min:8}).withMessage('La extensión debe ser mayor o igual a 8')
        .not()
        .isEmpty().withMessage('Campo vacío'),
    check('email')
        .exists({checkNull:true}).withMessage('Falta el email')
        .isEmail().withMessage('No es un Email')
        .not()
        .isEmpty().withMessage('Campo vacío'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

validate.modify = [
    check('username')
        .exists({checkNull:true}).withMessage('Falta el nombre de usuario')
        .isLength({min:8}).withMessage('La extensión debe ser mayor o igual a 8')
        .not()
        .isEmpty().withMessage('Campo vacío'),
    check('password')
        .exists({checkNull:true}).withMessage('Falta la contraseña')
        .isLength({min:8}).withMessage('La extensión debe ser mayor o igual a 8')
        .not()
        .isEmpty().withMessage('Campo vacío'),
    check('email')
        .exists({checkNull:true}).withMessage('Falta el email')
        .isEmail().withMessage('No es un Email')
        .not()
        .isEmpty().withMessage('Campo vacío'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = validate
