import React,{Fragment, useContext, useState} from 'react';

//Context
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorform ,mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;


    //state para nuevo proyecto  
    const[proyecto, guardarProyecto] = useState({
        nombre:''
    });

    //extraer nombre del proyecto
    const {nombre} = proyecto;

    //leer los contenidos del input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando un usuario envia un nuevo poryecto
    const onSubmitProyecto = e =>{
        e.preventDefault();

        //validar poryecto
        if(nombre===''){
            mostrarError();
            return;
        } 

        //agregar al state
        agregarProyecto(proyecto)

        //reiniciar el form
        guardarProyecto({
            nombre:''
        })
    }


    //Mostrar el formulario
    const onClick = () =>{
        mostrarFormulario();
    }


    return (
        <Fragment>
            <button 
                type="button"
                onClick={onClick} 
                className="d-block btn btn-color">
                Nuevo Proyecto
            </button>

            {formulario ?
 
                (

                <form 
                    className="form-floating"
                    onSubmit={onSubmitProyecto}>
                    
                    <input 
                        type="text"     
                        name="nombre" 
                        className="form-control input-add  border-0 border-bottom mt-2 mb-2" 
                        id="floatingInputValue" 
                        placeholder="Nombre del Proyecto"
                        value={nombre} 
                        onChange={onChangeProyecto}/>

                    <label 
                        htmlFor="floatingInputValue"     
                        className="text-dark">Nombre del Proyecto</label>

                        <input type="submit" className="btn btn-color w-100" value="Agregar Proyecto" />
                </form>
           
                ):   null
            }

            {errorform ? 
               <div className="alert alert-warning d-flex align-items-center mt-2" role="alert">
                  El Nombre es Obligatorio  
             </div>
            :null}
            

    
        </Fragment>


/*

            <button 
                type="button"
                //onClick={() => mostrarFormulario()} 
                onClick={onClick} 
                className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>

            {formulario ?
                
                (<form 
                onSubmit={onSubmitProyecto}
                className="formulario-nuevo-proyecto">
                    <input 
                        type="text" 
                        className="input-text" 
                        name="nombre" 
                        placeholder="Nombre del Proyecto" 
                        value={nombre} 
                        onChange={onChangeProyecto}/>
                    <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto" />
                </form>
                ):   null
            }

            {errorform ? <p className="mensaje error">El Nombre es Obligatorio</p> :null}
            */

    );
};

export default NuevoProyecto;