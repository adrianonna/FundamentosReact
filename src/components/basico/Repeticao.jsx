import React from 'react'
import produtos from '../../data/products'

export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => { //varre cada um dos produtos e transforma em trecho de código jsx
                        //key={prod.id} chave identifica cada elemento ajudando o react a detectar quando há uma mudança na ordem dos elementos por exemplo
            return <li key={prod.id}>
                    {prod.id} - {prod.nome} -> R$ {prod.preco}
                </li> 
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}