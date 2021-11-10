import React, {Fragment, useContext} from 'react';

//componentes
import Tarea from './Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {


    //Extraer proyecto del initialState
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext; 

    //Extraer tareas del proyecto seleccionado
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext; 



    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2 className="margin">Selecciona un proyecto</h2>;

    //Array destructuring, para extraer el proyecto actual
    const [proyectoActual] = proyecto;
    

    //Elimina un proyecto
    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual.id);
    }



    return (
        <Fragment>
            
            <div className="col-12 mt-3">

            <h2 className="w-100 text-center">Proyecto: {proyectoActual.nombre} 
                <button className="btn btn-danger ms-2" type="button" onClick={onClickEliminar}> 
                    <i className="fa fa-trash"></i> 
                </button>
            </h2>

                <div className="d-flex justify-content-center">
                    <ul className="list-group col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        {tareasproyecto.length === 0
                            ? (<li className="list-group-item p-0"> <p className="text-center m-0 p-0 p-5 alert alert-warning col-12">No Hay Tareas Asignadas en Este Proyecto</p> </li>)
                            :                                
                                    tareasproyecto.map(tarea => (                                      
                                            <Tarea
                                                key={tarea.id}
                                                tarea={tarea}
                                            />
                                    )) 
                        }
                    </ul>
                </div>


            </div>
        </Fragment>
    );
};

export default ListadoTareas;