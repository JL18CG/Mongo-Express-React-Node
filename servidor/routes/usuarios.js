// Rutas Para Crear Usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator')

//Crear un Usuario
    //api/usuarios

//registrar nuevo usuario
router.post('/', 
                [
                    check('nombre','El Nombre es Obligatorio').not().isEmpty(),
                    check('email','El Email no es Válido').isEmail(),
                    check('password','La Contraseña debe ser Mínimo de 6 Caracteres').isLength({min: 6})
                ]
                , usuarioController.crearUsuario  );



module.exports = router;
