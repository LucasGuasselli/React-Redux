import "./App.css"

import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro';
import ListaAlunos from "./components/repeticao/ListaAlunos"
import ListaProdutos from "./components/repeticao/TabelaProdutos"


//underline representa que o unico parametro da function nao sera usado
// sintase mais resuzida usando arrow function
export default _ => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <ListaProdutos></ListaProdutos>
            </Card> 

            <Card titulo="#06 - Repetição" color="#0000FF">
                <ListaAlunos></ListaAlunos>
            </Card> 

            <Card titulo="#05 - Componente com filho" color="#0000FF">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro " />                    
                    <FamiliaMembro nome="Ana " />
                    <FamiliaMembro nome="Gustavo " />
                    
                </Familia>
            </Card> 

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}/>
            </Card>        
            
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>     
            
            <Card titulo="#02 Com Parametro" color="#E8B71A">
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Segundo Subtitulo"
                nota={9.3} />
            </Card>     

            <Card titulo="#1 Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>        
        </div>
    </div>
);

