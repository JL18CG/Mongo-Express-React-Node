import React from 'react';

const Barra = () => {
    return (
        
        /*<header className="app-header">
            <p className="nombre-usuario">Hola! <span>José Luis Villalobos Ramírez</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
        */


        <nav className="navbar navbar-expand-lg navbar-dark bg-color nav-fix">
            <div className="container-fluid">

                <a className="navbar-brand" href="#!">¡Hola! José Luis</a>
                <button className="btn btn-color fw-bolder">Cerrar Sesión</button>

            </div>
        </nav>

      
    );
};

export default Barra;