// Rutas Para Autenticar Uusarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const authController = require('../controllers/authController');

//Autenticar un Usuario
    //api/auth

//autenticar usuario
router.post('/', 
                [
                    check('email','El Email no es Válido').isEmail(),
                    check('password','La Contraseña debe ser Mínimo de 6 Caracteres').isLength({min: 6})
                ]
                , authController.autenticarUsuario  );

module.exports = router;