import React, {useState} from 'react'
import Sub from './Sub'


export default props =>{

    // const [a, b] = [1, 2] //a=1 e b=2

    const [texto, setTexto] = useState('Valor')
    const [num, setNum] = useState(0)


    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
    }

    return(
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub> {/* Passando uma função como parâmetro (para o props) para o componente Sub */}
        </div>
    )
}