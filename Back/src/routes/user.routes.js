//Importado de las dependencias Router, Middlewares: isAdmin y validateJWT
const router = require('express').Router();
// Validaciones 

const {
    isAuthorized,
    isAdmin,
    validateJWT,
    UserInfo
} = require('../middlewares/validaciones');
// Validaciones: express-validator
const {
    create: createUser,
    modify: modifyUser
} = require('../validators/users')
//Importado Desestructurado del controlador de User
const {
    getUsers,
    getUserID,
    postUser,
    putUser,
    deleteUser
} = require('../controllers/user.controllers');

//Ruta GetUsers
router.get('/users', [validateJWT, isAdmin], getUsers); //Para obtener todos los usuarios

//Ruta GetUserID
router.get('/user', [validateJWT, UserInfo], getUserID); //Para obtener un usuario por ID

//Ruta PostUser
router.post('/user/register', [createUser], postUser); //Creo un usuario

//Ruta PutUser
router.put('/user/:idUser', [validateJWT, modifyUser, isAuthorized], putUser); //Modifico un usuario

//Ruta DeleteUser 
router.delete('/user/:idUser', [validateJWT, isAuthorized], deleteUser); //Elimino un usuario y también sus tareas


module.exports = router;