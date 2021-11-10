import React from 'react';

//componentes
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
    return (

        <div className="col-12">
            <Sidebar/>
            <div className="container-main">
                <Barra/>
            
                <FormTarea/>
                    
                <div className="contenedor-tareas">
                    <ListadoTareas/>
                </div>



            </div>
        </div>
       /* <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>*/
    );
};

export default Proyectos;