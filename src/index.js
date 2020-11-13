import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render( //Só retorna um elemento, tudo é adicionado dentro de uma <div>
    <App/>,
    document.getElementById('root') //Estou adicionando/mesclando tudo dentro da div root (../public/index.html)
)