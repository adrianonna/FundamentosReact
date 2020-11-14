import React, {useState} from 'react'

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0)) //Atribui um array de 8(definido no parâmetro do componente Mega em App) números 0(zeros)
    
    function gerarNumerosNaoContido(array){
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) //De forma recursiva, verifica se existe números repetidos(includes) retornando true ou false
            ? gerarNumerosNaoContido(array) //se existir chama novamente a função
            : novoNumero //se não, retorna novoNumero
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdeNumero)
        .fill(0)
        .reduce(a => {
            const novoNumero = gerarNumerosNaoContido(a)
            return [...a, novoNumero]
        }, [])
        .sort((a,b) => a -b)
        
        setNumeros(novoArray)
    }

    return(
        <React.Fragment> 
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </React.Fragment>
    )
}