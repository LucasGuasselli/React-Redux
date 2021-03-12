import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto="Lucas" idade={26} nerd={true} />
            <DiretaFilho texto="Vitor" idade={36} nerd={true} />
        </div>
    )
}