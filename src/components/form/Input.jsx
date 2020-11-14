import React, {useState} from 'react'

export default props => {
    const [nome, setNome] = useState('Pedro') //retorna o valor e a função que altera esse valor

    return(
    <React.Fragment> 
        {/* <input type="text" value={nome} readOnly /> Quando for apenas para leitura, ou seja, não é possível realizar alteração */}
    <h3>{nome}</h3>
        <input type="text" value={nome}
            onChange={e => setNome(e.target.value)} /> {/* Irá receber um evento e o evento será passado para a função alteraNome */}
    </React.Fragment>
    )
}