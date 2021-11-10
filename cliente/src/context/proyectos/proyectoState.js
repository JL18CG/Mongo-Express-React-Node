import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

//CONTEXT REDUCER
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

//Types
import { 
        FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS, 
        AGREGAR_PROYECTO, 
        VALIDAR_FORMULARIO, 
        PROYECTO_CTUAL,
        ELIMINAR_PROYECTO } from '../../types';




const ProyectoState = props=>{

        
    const proyectos = [
        {id:1,nombre:'Sistema Inventario'},
        {id:2,nombre:'Sistema de Facturación'},
        {id:3,nombre:'Diseño de Sitio Web'}
    ]


    const initialState = {
        proyectos:[],
        formulario: false,
        errorform:false,
        proyecto:null,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proeyctos
    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }


    //Agregar un nuevo proyecto
    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4();


        //Insertar el proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTO,
            payload: proyecto
        })
    }


    //Validar Formulario por errores
    const mostrarError = () =>{
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }


    //Selecciona el proyecto que el usuario dio clic
    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_CTUAL,
            payload: proyectoId
        })
    }

    //Elimina un proyecto
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        //A qui nacen todos los datos
        <proyectoContext.Provider
            value={{
                //states arriba
                proyectos: state.proyectos,
                formulario:state.formulario,
                errorform:state.errorform,
                proyecto:state.proyecto,

                //funciones abajo
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;