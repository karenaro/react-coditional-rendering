import React from 'react';
import './cursos.css';

export function ingles ()  {
    return (
        <div className="ingles">
        <h6>ingles</h6>
        {
            props.ingles.nota <= 3
            ?
            <span className= "name">{props.ingles.name}</span>
            :
            <span>{props.ingles.name}</span>
        }   
        {' '}{props.ingles.genero}{props.ingles.nota}
        
            
        </div>
    );
}

