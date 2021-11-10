import { 
        FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS, 
        AGREGAR_PROYECTO, 
        VALIDAR_FORMULARIO,
        PROYECTO_CTUAL,
        ELIMINAR_PROYECTO
} from '../../types';


export default (state,action) =>{
    switch(action.type){

        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario:true
            }

        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }

        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos:[...state.proyectos, action.payload],
                formulario:false,
                errorform:false
            }

        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorform:true
            }

        case PROYECTO_CTUAL:
            return{
                ...state,
               proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }

        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto:null
            }

        default:
            return state;
    }
}
 