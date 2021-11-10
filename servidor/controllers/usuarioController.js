const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) =>{

    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array() })
    }
    //Extraer email y password
    const { email, password } = req.body;

    try{

        //Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({msg:"El Usuario ya se Encuentra Registrado"})
        }

        //crea nuevo usuario
        usuario = new Usuario(req.body);

        //Hash password
        const salt= await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash( password,salt );

        //guardar el nuevo usuario
        await usuario.save();

        //crear y frimar el JWT
        const payload = {
            usuario:{
                id:usuario.id
            }
        };

        //firmar el JWT
        jwt.sign(payload, process.env.SECRET,{
            expiresIn:3600
        }, (error, token) =>{
            if(error) throw error;
            res.json({token})
        });

        //Mensaje de confirmacion
       // res.json({msg:"Usuario Creado Correctamente"})

    }catch(error){
        console.log(error);
        res.status(400).send('Hubo un error')
    }

} 