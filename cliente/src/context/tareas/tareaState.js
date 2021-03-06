import React, { useReducer }  from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA, 
    VALIDAR_TAREA, 
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'


const TareaState = props =>{
    const initialState ={
        tareas:[
            {id:1,nombre:'Definir Estructura de Base de Datos',estado:true, proyectoId:1},
            {id:2,nombre:'Definir Diseño de la Interfaz del Usuario',estado:false, proyectoId:2},
            {id:3,nombre:'Definir Diseño de la Interfaz del Administrador',estado:true, proyectoId:3},
            {id:4,nombre:'Proteger Rutas Administrativas',estado:false, proyectoId:1},
            {id:5,nombre:'Definir Estructura de Base de Datos',estado:true, proyectoId:1},
            {id:6,nombre:'Definir Diseño de la Interfaz del Usuario',estado:false, proyectoId:3},
            {id:7,nombre:'Definir Diseño de la Interfaz del Administrador',estado:true, proyectoId:3},
            {id:8,nombre:'Proteger Rutas Administrativas',estado:false, proyectoId:2}
        ],
        tareasproyecto:null,
        errortarea: false,
        tareaseleccionada:null

    }

    //crear dispatch y state
    const [state,dispatch] = useReducer(tareaReducer, initialState);

    //Crear las funciones

    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoId =>{
        dispatch({
            type:TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar tarea al proyecto seleccionado
    const agregarTarea = tarea =>{
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y muestra un error en caso de que sea necesario
    
    const validarTarea = () =>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }
    
    // Eliminar tarea por id
    const eliminarTarea = id =>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload:id
        })
    } 

    //cambia el estadod e cada tarea
    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //extrae una tarea ara edicion
    const guardarTareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //actualizar tarea
    const actualizarTarea = tarea =>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //elimina la tarea seleccionada
    const limpiarTarea = () =>{
        dispatch({
            type:LIMPIAR_TAREA
        })
    }


    return (
        <TareaContext.Provider
            value={{
                //states
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,


                //funciones
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}


export default TareaState;