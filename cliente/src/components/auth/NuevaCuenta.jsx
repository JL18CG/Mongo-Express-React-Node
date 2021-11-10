import React,{useContext, useState}  from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertasContext';


const NuevaCuenta = () => {

        //extraer los valores del context
        const alertaContext = useContext(AlertaContext);
        const {alerta, mostrarAlerta} = alertaContext;

        //state para iniciar sesion
        const [usuario,guardarUsuario] = useState({
            nombre:'',
            email:'',
            password:'',
            confirmpass:''
        })
    
        //extraer de usuario
        const {nombre,email, password,confirmpass} = usuario;
    
        const onChange = e =>{
            guardarUsuario({
                ...usuario,
                [e.target.name] : e.target.value
            })
        }
    
        //cuando el usuario da submit al formulario
        const onSubmit = e =>{
            e.preventDefault();
            
            //validar campos vacios
            if(nombre.trim() ==='' || email.trim() ===''|| password.trim() ==='' || confirmpass.trim() ===''){
                mostrarAlerta('Todos los Campos son Obligatorios','alert-danger','fa-exclamation-circle');
                return;
            }

            //password de minimo seis caracteres
            if(password.length < 6){
                mostrarAlerta('La Contraseña Debe ser Mínimo de 6 Carácteres','alert-warning','fa-unlock');
                return;
            }

            //los dos passwords deben ser iguales
            if(password !== confirmpass){
                mostrarAlerta('Las Contraseñas no son Iguales','alert-warning','fa-unlock');
                return;
            }

            //pasarlo al action
        }

        

    return (

       <main className="form-signin text-center">

        {alerta ? (

            <div className={`alert ${alerta.categoria} alert-dismissible fade show position-absolute top-0 end-0 mt-4 me-4`} role="alert">
                <strong> <i className={`fa ${alerta.icono} `} > </i> {alerta.msg}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        ): null}


            <form onSubmit={onSubmit} className="col-12 align-self-center"> 
                <img className="mb-4 rounded " src="https://placeimg.com/100/100/animals" alt="" width="72"/>
                <h1 className="h3 mb-3 fw-normal">Obtener una Cuenta</h1>

                <div className="form-floating mt-1">
                    <input type="text" 
                            className="form-control" 
                            id="floatingInput" 
                            value={nombre}
                            name="nombre" 
                            id="nombre" 
                            placeholder="Tu Nombre"
                            onChange={onChange}/>                          
                    <label htmlFor="floatingInput">Nombre</label>
                </div>
            
                <div className="form-floating mt-1">
                    <input type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            value={email}
                            name="email"
                            onChange={onChange}
                            placeholder="Escribe tu Correo"/>                          
                    <label htmlFor="floatingInput">Correo Electrónico</label>
                </div>

                <div className="form-floating mt-1">
                    <input type="password" 
                            className="form-control mb-0" 
                            id="password" 
                            value={password}
                            name="password" 
                            placeholder="Tu Constraseña"
                            onChange={onChange}/>
                    <label htmlFor="password">Contraseña</label>
                </div>

                <div className="form-floating mt-1">
                    <input type="password"
                            className="form-control" 
                            id="confirmpass" 
                            value={confirmpass}
                            name="confirmpass" 
                            placeholder="Tu Constraseña"
                            onChange={onChange}/>
                    <label htmlFor="confirmpass">Confirma la Contraseña</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Registrar Cuenta</button>

                <div className="d-flex justify-content-start mt-2">
                    <Link to={'/'} className="link-primary"> Iniciar Sesión </Link> 
                </div>    
                <p className="w-100 mt-2 mb-3 text-muted">JLVR &copy; 2021</p>
            </form>
  
        </main>
    );
};

export default NuevaCuenta;