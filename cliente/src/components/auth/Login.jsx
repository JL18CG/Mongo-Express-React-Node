import React,{useState} from 'react';
import {Link} from 'react-router-dom';


const Login = () => {

    //state para iniciar sesion
    const [usuario,guardarUsuario] = useState({
        email:'',
        password:''
    })

    //extraer de usuario
    const {email, password} = usuario;

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

        //pasarlo al action
    }


    return (
       /*<div className="form-usuario">
           <div className="contenedor-form sombra-dark">
               <h1>Iniciar Sesion</h1>

                <form onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            value={email}
                            name="email" 
                            id="email" 
                            placeholder="Tu Email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            value={password}
                            name="password" 
                            id="password" 
                            placeholder="Tu Constraseña"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>

                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
           </div>
       </div>
*/
    
    


         
<main className="form-signin text-center">
    <form onSubmit={onSubmit} className="col-12 align-self-center"> 
        <img className="mb-4 rounded " src="https://placeimg.com/100/100/animals" alt="" width="72"/>
        <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>

        <div className="form-floating">
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
                    className="form-control" 
                    id="floatingPassword" 
                    value={password}
                    name="password" 
                    placeholder="Tu Constraseña"
                    onChange={onChange}/>
            <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>

        <div className="d-flex justify-content-start mt-2">
            <Link to={'/nueva-cuenta'} className="link-primary"> Obtener Cuenta </Link> 
        </div>    
        <p className="w-100 mt-2 mb-3 text-muted">JLVR &copy; 2021</p>
    </form>
  
    
</main>



    );
};

export default Login;