import React from 'react'
import IndiretaFilho from './DiretaFilho'

export default props => {
    // se passa informações para o pai por meio de Callback

    const callback = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20) + 50)
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={ _ => callback('João', gerarIdade(), gerarNerd()) }>
                Fornecer  Informações
            </button>
        </div>

    )
}
