const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const {validationResult} = require('express-validator');

//Crear tareas
exports.crearTarea = async (req, res) =>{
     
    //revisar si hay errores
   
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array() })
    }
  

    try{
        //Extraer el poryecto y comprobar si existe
        const { proyecto } = req.body;

        const existeProyecto = await Proyecto.findById(proyecto);
        if(!existeProyecto) return res.status(404).json({msg:"Proyecto No Encontrado"});

        //verificar el creador del proyecto
        if(existeProyecto.creador.toString() !== req.usuario.id) return res.status(401).json({msg:'No Autorizado'});

        //Crear la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({tarea})


    }catch(error){
        console.log(error);
        res.status(500).send("Hubo un Error");
    }

}

//Obtener tareas
exports.obtenerTareas = async (req, res) =>{

    try{   
        //Extraer el poryecto y comprobar si existe
        const { proyecto } = req.body;

        const existeProyecto = await Proyecto.findById(proyecto);
        if(!existeProyecto) return res.status(404).json({msg:"Proyecto No Encontrado"});

        //verificar el creador del proyecto
        if(existeProyecto.creador.toString() !== req.usuario.id) return res.status(401).json({msg:'No Autorizado'});
    
        //obtener tareas por poryecto
        const tareas = await Tarea.find({ proyecto});
        res.json({tareas});

    }catch(error){
        console.log(error);
        res.status(500).send("Hubo un Error");
    }

}

//Actualizar tareas
exports.actualizarTarea = async (req, res) =>{
    try{   
        //Extraer el poryecto y comprobar si existe
        const { proyecto, nombre,estado } = req.body;

        //si la tarea existe o no
        let tarea = await Tarea.findById(req.params.id);

        if(!tarea) res.status(404).json({msg:'Tarea no Encontrada'});
        
        //extraer poryecto
        const existeProyecto = await Proyecto.findById(proyecto);

        //verificar el creador del proyecto
        if(existeProyecto.creador.toString() !== req.usuario.id) return res.status(401).json({msg:'No Autorizado'});
    
        //Crear un objeto con la nueva información
        const nuevaTarea = {};

        if(nombre) nuevaTarea.nombre = nombre
        if(estado) nuevaTarea.estado = estado

        //Guardar la tarea
        tarea = await Tarea.findOneAndUpdate({_id: req.params.id}, nuevaTarea,{new:true});
        res.json({ tarea })

        

    }catch(error){
        console.log(error);
        res.status(500).send("Hubo un Error");
    }

}

//Eliminar tareas
exports.eliminarTarea = async (req, res) =>{
    try{   
        //Extraer el poryecto y comprobar si existe
        const { proyecto } = req.body;

        //si la tarea existe o no
        let tarea = await Tarea.findById(req.params.id);

        if(!tarea) res.status(404).json({msg:'Tarea no Encontrada'});
        
        //extraer poryecto
        const existeProyecto = await Proyecto.findById(proyecto);

        //verificar el creador del proyecto
        if(existeProyecto.creador.toString() !== req.usuario.id) return res.status(401).json({msg:'No Autorizado'});
    
        //Eliminar
        await Tarea.findOneAndRemove({ _id: req.params.id});
        res.json({msg:'Tarea Eliminada'})

        

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un Error');
    }


}
