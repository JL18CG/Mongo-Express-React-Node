import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertasContext';


import { 
    MOSTRAR_ALERTA, 
    OCULTAR_ALERTA
} from '../../types';

const AlertaState = props =>{
    const initialState = {
        alerta:null
    }

    const [state, dispatch] = useReducer(alertaReducer,initialState);

    //funciones
    const mostrarAlerta = (msg, categoria,icono) =>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload:{
                msg,
                categoria,
                icono
            }
        });

        setTimeout(() =>{
            dispatch({
                type:OCULTAR_ALERTA
            })
        },5000)
    }

    return(

        <alertaContext.Provider
            value={{
                alerta:state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>

    )

}

export default AlertaState;