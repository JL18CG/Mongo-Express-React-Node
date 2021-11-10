const mongoose = require('mongoose');

//Esquea Usuario
const UsuarioSchema = mongoose.Schema({
    
    nombre:{
        type:String,
        require:true,
        trim: true
    },
    email:{
        type:String,
        require:true,
        trim: true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim: true
    },
    registro:{
        type:Date,
        default: Date.now()
    }


});

module.exports = mongoose.model('Usuario',UsuarioSchema)