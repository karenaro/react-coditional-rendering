import React from 'react';
import './cursos.css';

const programacion = (props) =>{
    return (
        <div className="programacion">
        <h6>Programacion</h6>
        {
            props.programacion.nota <= 3
            ?
            <span className= "name">{props.programacion.name}</span>
            :
            <span>{props.programacion.name}</span>
        }   
        {' '}{props.programacion.genero}{props.programacion.nota}
        
       
        
        </div>
    );
}

export default programacion;
