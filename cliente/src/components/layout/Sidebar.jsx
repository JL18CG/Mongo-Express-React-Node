import React, { Fragment } from 'react';

//componentes
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/Listado';

const Sidebar = () => {
    return (
       /* <aside>
            <h1>Mern <span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos/>
            </div>
        </aside>
*/



<Fragment>

<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar-custom">
     <h1 className="w-100 text-center mb-4 mt-3">MERN <span>Tasks</span></h1>
    <NuevoProyecto/>
    <h2 className="mb-3 mt-3" >Tus Proyectos</h2>
    
     <ListadoProyectos/>   
  
    

   
    <hr/>

    
</div>


</Fragment>
    );
};

export default Sidebar;