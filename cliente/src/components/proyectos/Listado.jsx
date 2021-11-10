import React, { useContext, useEffect  } from 'react';

//componentes
import Proyecto from './Proyecto';

//context
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //Obtener proyectos cuando carga el compnente
    useEffect(()=>{
        obtenerProyectos();
        // eslint-disable-next-line

    }, []);


    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return  <div className="alert alert-warning d-flex align-items-center " role="alert"> <p className="m-0 p-0 text-center w-100">Aún No Hay Proyectos</p> </div>;



    return (

        <ul className="nav nav-pills flex-column mb-auto lista">
           
                {proyectos.map(proyecto =>(
                            <Proyecto
                                key={proyecto.id}
                                proyecto={proyecto}
                            />            
                ))
            }
        

          
        </ul>

        /*
        <ul className="listado-proyectos"> 
            {proyectos.map(proyecto =>(
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
        */
    );
};

export default ListadoProyectos;