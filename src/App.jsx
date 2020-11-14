import './App.css'
import React from 'react';

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro'
import ComFilhos from './components/basico/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basico/Repeticao'
import Condicional from './components/basico/Condicional'
import CondicionalComIf from './components/basico/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import ContadorV2 from './components/contador/ContadorV2'
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card tituloFooter="#12 - Mega" color="#73503C">
                <Mega qtdeNumero={8}></Mega>
            </Card> 
            <Card tituloFooter="#11 - ContadorV2" color="#223F3A">
                <ContadorV2></ContadorV2>
            </Card> 
            <Card tituloFooter="#10 - Contador" color="#293E6A">
                <Contador passo={10} valor={0}></Contador>
            </Card> 
            <Card tituloFooter="#09 - Input" color="#9C0F5F">
                <Input></Input>
            </Card>        
            <Card tituloFooter="#08 - Comunicação indireta" color="#000">
                <Super></Super>
            </Card>
            <Card tituloFooter="#07 - Comunicação direta" color="#4298B5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card tituloFooter="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={1}></CondicionalComIf>
            </Card>
            <Card tituloFooter="#05 - Condicional v1" color="#E94C6F">
                <Condicional numero={2}></Condicional>
            </Card>
            <Card tituloFooter="#04 - Repetição" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>
            <Card tituloFooter="#03 - Componente com filho" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card tituloFooter="#02 - Componente com parâmetro" color="#FF85CB">
                <ComParametro titulo="Esse é um título"
                    subtitulo="Esse é um subtítulo" />
                <ComParametro titulo="Esse é um título 2"
                    subtitulo="Esse é um subtítulo 2" />
            </Card>
            <Card tituloFooter="#01 - Primeiro componente" color="#92B06A">
                <Primeiro/>
            </Card>
        </div>
    </div>
)