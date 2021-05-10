import React from 'react';
import './universidad.css';
import { Facultades }  from '../facultades/facultades'; 



const Universidad = () => {
    return (
        <div className="Univers">
          <h1>Universidad XYZ</h1>
          <Facultades/>
        </div>
        
    );
}


export default Universidad;