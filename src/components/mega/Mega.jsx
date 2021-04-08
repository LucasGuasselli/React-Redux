import "./mega.css"

import React, { useState } from 'react'


export default props => {

    function gerarNumeros(qtde){

        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [ ...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
    
        return numeros
    }    
    
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
            return array.includes(aleatorio) ?
                gerarNumeroNaoContido(min, max, array) :
                aleatorio;
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    // começando já com os números
    const numerosIniciais = gerarNumeros(qtde)
    
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div className="Mega">
                <label>Qtde de Números</label>
                <input  type="number" value={qtde} 
                    onChange={e => {
                        setQtde(+e.target.value)
                        // alterando junto com a seleção de quantidade
                        setNumeros(gerarNumeros(+e.target.value))
                    }}
                    />
            </div>

            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Apostar</button>

        </div>
    )
}