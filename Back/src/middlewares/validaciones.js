const {
    validationResult
} = require('express-validator')
const UserModel = require('../models/USER')
//Importado del JWT para verificarlos
const jwt = require("jsonwebtoken");

const validations = {}


//Fn para validarJWT
validations.validateJWT = async (req, res, next) => {
    let token = req.headers.authorization;

    /* verify if token in a request exist */
    if (!token) {
        return res.status(401).json({
            msg: "Error de autenticación - no hay token en la petición",
        });
    } //Devuelve en caso de no recibir el token

    try {
        /* Is obtained idUser, if was validated */
        const {
            userID
        } = await jwt.verify(token, process.env.SECRET);
        /* find User on DB to know if to belongs at system */
        const Usuario = await UserModel.findById(userID);
        /* If don't exist User throw an error */
        if (!Usuario) {
            return res.status(401).json({
                error: "Token no válido - usuario no existe en la DB",
            });
        } //Devuelve en caso de que el usuario no existe en la DB
        /* Verify if the User is Active */
        if (!Usuario.isActive) {
            return res.status(401).json({
                message: "Token no válido - usuario no está activo",
            });
        } //Devuelve en caso de que el usuario con estado false
        /* is added the info by user to request what for can be utilized on rest of middlewares*/
        req.user = Usuario;

        /* to be continue of rest the request */
        next(); //En caso exitoso sigue con la ejecución
    } catch (error) {
        res.status(401).json({
            msg: " Error de autenticación - Token no válido",
            error: error.message
        }); //Token no válido
    }
};


validations.isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin_user') {
        return res.status(401).json({
            message: 'No autorizado - No eres administrador'
        })
    }

    next();
};


validations.isAuthorized = (req, res, next) => {
    try {
        if (!(req.params.idUser == req.user._id || req.user.role === 'admin_user')) {
            return res.status(401).json({
                message: "No está autorizado para esta petición"
            })
        } //Verifico si está autorizado el usuario por role o si es propietario de la tarea
        next()
    } catch (error) {
        return res.status(404).json({
            message: "No está autorizado para esta petición o no viene la información adecuada."
        })
    }
};

validations.validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(403).json({
            errors: error.array()
        })
    }
};

validations.UserInfo = async (req, res, next) => {
    const user = await UserModel.aggregate([{
            $match: {
                $and: [{
                    "_id": req.user._id
                }, {
                    isActive: true
                }]
            }
        },
        {
            $project: {
                _id: '$_id',
                username: '$username',
                email: '$email',
                role: '$role'
            }
        }
    ]);

    if (!user) {
        return res.status(404).json({
            message: "No se encuentra el usuario"
        })
    }
    req.userResult = user;

    next()
}

module.exports = validations;