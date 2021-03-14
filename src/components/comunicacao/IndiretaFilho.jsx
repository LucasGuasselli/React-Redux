import React from 'react'
import IndiretaFilho from './DiretaFilho'

export default props => {
    // se passa informações para o pai por meio de Callback

    const cb = props.quandoClicar
    return (
        <div>
            <div>Filho</div>
            <button onClick={ _ => cb('João', 53, true) }>
                Fornecer  Informações
            </button>
        </div>

    )
}
