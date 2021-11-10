import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {

     //Extraer si un proyecto esta activo
     const proyectosContext = useContext (proyectoContext);
     const {proyecto} = proyectosContext;

    //obtener la funcion para agregar tareas
    const tareasContext = useContext(tareaContext);
    const {tareaseleccionada ,errortarea,agregarTarea, validarTarea, obtenerTareas, limpiarTarea, actualizarTarea} = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(()=>{
        if(tareaseleccionada !==null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    },[tareaseleccionada])
 
     //state del formulario
     const [tarea, guardarTarea] = useState({
         nombre:''
     })

     //extraer el nombre del proyecto
     const {nombre} = tarea;

     
    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Array destructuring, para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const hadleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        //validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        //Revisar si es edicion o nueva tarea
        if(tareaseleccionada === null){
            //agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            //actualizar tarea existente
            actualizarTarea(tarea);
            //elimina tarea seleccionada del state
            limpiarTarea()
     
        }

        

        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        guardarTarea({
            nombre:''
        })
    }


    return (


        <div className="pos-1 col-12 text-center bg-3 pb-4 pt-5">

                <div className="col-12 d-flex justify-content-center m-0 p-0">
                    <form className="form-floating col-lg-8 col-md-8 col-sm-12 col-xs-12"
                        onSubmit={onSubmit}
                    >
                            
                            <input 
                                type="text"     
                                name="nombre" 
                                className="form-control input-add  border-0 border-bottom mt-2 mb-2" 
                                id="floatingInputValue" 
                                placeholder="Nombre de la Tarea"
                                value={nombre}
                                onChange={hadleChange}
                            />

                            <label 
                                htmlFor="floatingInputValue"     
                                className="text-dark">Nombre de la Tarea</label>

                                <input type="submit" className="btn btn-color w-100" value={tareaseleccionada ? 'Actualizar Tarea':'Agregar Tarea'} />
                    </form>
                </div>
                
               

           

                {errortarea ?   (
                <div className="col-12 d-flex justify-content-center mt-2 p-0">
                    <div className="alert alert-warning col-lg-8 col-md-8 col-sm-12 col-xs-12  " role="alert"> 
                        <p className="m-0 p-0 text-center ">El Nombre de la Tarea es Obligatorio</p> 
                    </div>  
                </div>
                
                )  :null}

           
        </div>
       /* <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" className="input-text" name="nombre" placeholder="Nombre Tarea" />
                </div>

                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar Tarea" />
                </div>

            </form>
        </div>
        */
    );
};

export default FormTarea;