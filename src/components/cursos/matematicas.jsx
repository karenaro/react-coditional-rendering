import React from 'react';
import './cursos.css';

export function Matematicas () {
    return (
        <div className="Matematicas">
        <h6>matematicas</h6>
        {
            props.matematicas.nota <= 3
            ?
            <span className= "name">{props.matematicas.name}</span>
            :
            <span>{props.matematicas.name}</span>
        }   
        {' '}{props.matematicas.genero}{props.matematicas.nota}
        
        
        </div>
    );
}

