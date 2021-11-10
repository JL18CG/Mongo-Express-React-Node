import React, { useContext } from 'react';

import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {
    //obtener el state de proyecto
    const proyectosContext = useContext (proyectoContext);
    const {proyecto} = proyectosContext;
    
    //obtener la funcion para agregar tareas
    const tareasContext = useContext(tareaContext);
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

    //fucnión que se ejecuta cuando el usuario presiona eliminar
    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }

    //funcion que modifica el estado de las tareas
    const cambiarEstado = tarea =>{
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
            

        cambiarEstadoTarea(tarea)
    }

    //agrega una tarea actual cuando el ususario desea editarla
    const seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
    }

    return (


        <li className="list-group-item d-flex justify-content-between align-items-center mb-2 m-0 p-0">
            
            <div className="row col-12 m-0 p-0">
                <div className="float-start py-2 col-sm-12 col-xs-12 col-md-12 col-lg-8 d-flex justify-content-start align-items-center text-start">
                    <p className="w-100 p-0 m-0 text-sm-center text-start"> {tarea.nombre} </p> 
                </div>
                <div className="float-end py-2 col-sm-12 col-xs-12 col-md-12 col-lg-4 d-flex justify-content-end align-items-center d-flex justify-content-sm-evenly">
                   <div className="col d-flex justify-content-evenly">
                   { tarea.estado 
                        ? 
                            (
                                <button type="button" className="btn btn-success me-1" onClick={ () => cambiarEstado(tarea)  }><i className="fa fa-check-double"></i></button>
                            )
                        :
                            (
                                <button type="button"  className="btn btn-secondary me-1" onClick={ () => cambiarEstado(tarea)  }><i className="fa fa-hourglass-start"></i></button>
                            )
                    }
                    <button type="button" className="btn btn-warning me-1" onClick={ () => seleccionarTarea(tarea)}> <i className="fa fa-pencil-alt text-white"></i> </button>
                    <button type="button" className="btn btn-danger" onClick={() => tareaEliminar(tarea.id)}> <i className="fa fa-trash"></i> </button>
                   </div>
                   
                </div>
            </div>
            
            
        </li>


        /*<li className="list-group-item">
            <p>{tarea.nombre}</p>
            
            <div className="estado">
                {tarea.estado
                    ? 
                        (
                            <button type="button" className="completo">Completo</button>
                        )
                    :
                        (
                            <button type="button" className="incompleto">Incompleto</button>
                        )
                }
            </div>

            <div className="acciones">
                <button type="button" className="btn btn-primario"> Editar </button>
                <button type="button" className="btn btn-secundario"> Eliminar </button>
            </div>

        </li>*/
    );
};

export default Tarea;