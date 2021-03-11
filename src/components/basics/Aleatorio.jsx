import React from 'react';

export default function Aleatorio(props){
    let min = Math.ceil(props.min);
    let max = Math.floor(props.max);
    let resultado =  Math.floor(Math.random() * (max-min)) + min

    return (
        <div>
          O Resultado é: { resultado }
        </div>
    )
}