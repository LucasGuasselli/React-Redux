import React from 'react'

import produtos from '../../data/produtos'

export default props =>{

    function getLinhas() {
        return  produtos.map((produto) =>{
            return( 
                <tr>
                    <td> {produto.id} </td>
                    <td> {produto.nome} </td>
                    <td>R$ {produto.preco.toFixed(2).toString().replace(".", ",")} </td>
                </tr>            
            );
        })
    } 

    return(
        <div>
            <table className="" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>                    
                        {getLinhas()}                    
                </tbody>
            </table>
        </div>
    );
}