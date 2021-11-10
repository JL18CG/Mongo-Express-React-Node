const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');

//Crea proyectos
    //api/proyectos

//registrar nuevo proyecto
router.post('/'
                ,auth,
                [
                    check('nombre','El Nombre de Proyecto es Obligatorio').not().isEmpty()
                ]
                ,proyectoController.crearProyecto  );

//obtener proyectos por ususario
router.get('/'
                ,auth
                ,proyectoController.obtenerProyectos  );

//actualizar proyecto por :id
router.put('/:id'
                ,auth,
                [
                    check('nombre','El Nombre de Proyecto es Obligatorio').not().isEmpty()
                ]
                ,proyectoController.actualizarProyecto  );

                
//eliminar proyecto por :id
router.delete('/:id'
                ,auth
                ,proyectoController.eliminarProyecto  );

    

module.exports = router;