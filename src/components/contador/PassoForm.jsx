import React from 'react';


export default props => {
    return(
        <div>
            <div className="Contador">
                <label htmlFor="passoInput">Passo: </label>
                <input 
                    id="passInput" 
                    type="number" 
                    value={props.passo} 
                    onChange={ e=> props.setPasso(+e.target.value)}>
                </input>
            </div>
        </div>
    )
}