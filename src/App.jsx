import './App.css'
import React from 'react';

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro'
import ComFilhos from './components/basico/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basico/Repeticao'
import Condicional from './components/basico/Condicional'
import CondicionalComIf from './components/basico/CondicionalComIf'


export default (props) => (
    <div className="App">
        <Card tituloFooter="#01 - Primeiro componente">
            <Primeiro/>
        </Card>
        <Card tituloFooter="#02 - Componente com parâmetro">
            <ComParametro titulo="Esse é um título"
                subtitulo="Esse é um subtítulo" />
            <ComParametro titulo="Esse é um título 2"
                subtitulo="Esse é um subtítulo 2" />
        </Card>
        <Card tituloFooter="#03 - Componente com filho">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card tituloFooter="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card tituloFooter="#05 - Condicional v1">
            <Condicional numero={2}></Condicional>
        </Card>
        <Card tituloFooter="#05 - Condicional v2">
            <CondicionalComIf numero={1}></CondicionalComIf>
        </Card>
    </div>
)