const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');


//Crea tareas
    //api/tareas

//registrar nueva tarea
router.post('/'
                ,auth,
                [
                    check('nombre','El Nombre de la Tarea es Obligatorio').not().isEmpty(),
                    check('proyecto','El Nombre del Proyecto es Obligatorio').not().isEmpty()
                ]
                ,tareaController.crearTarea);

// Obtener las tareas por poryecto
router.get('/'
                ,auth
                ,tareaController.obtenerTareas);


// actualizar las tareas por poryecto
router.put('/:id'
                ,auth,
                [
                    check('nombre','El Nombre de la Tarea es Obligatorio').not().isEmpty(),
                ]
                ,tareaController.actualizarTarea);

// eliminar las tareas por poryecto
router.delete('/:id'
                ,auth
                ,tareaController.eliminarTarea);                

module.exports = router;