import React, { useContext } from 'react';
//Context
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {


    //obtener el state de proyecto
    const proyectosContext = useContext (proyectoContext);
    const {proyectoActual} = proyectosContext;

    //obtener la funcion del context tarea
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas} = tareasContext;

    //funcion para agreagr el proyecto actual y tareas
    const seleccionarProyecto = id =>{
        proyectoActual(id); //fijar un proyecto actual
        obtenerTareas(id); //filtrar las tareas cuando se da
    }

    return (
        /*<li>
            <button type="button" className="btn btn-blank">
            {proyecto.nombre}
            </button>
        </li>
        */


       /* <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
        Home
        </a>
        </li>
*/

        <li>
        <button type="button" className="nav-link text-dark w-100 text-start mb-1" onClick={() => {
            seleccionarProyecto(proyecto.id)
        }}>
            {proyecto.nombre}
        </button>
        </li>
    );
};

export default Proyecto;