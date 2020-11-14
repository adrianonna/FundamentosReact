import React from 'react'


export default props =>{
    function acao(e){ //Pode ter ou não o parâmetro e(event) já que não está utilizando
        props.onClicar(Math.random(), "Gerado") //É possível passar vários parâmetros que serão recebidos no quandoClicar em Super
    }

    return(
        <div>
            <button onClick={acao}>Alterar</button> {/* Chama a função acao() que irá retornar o valor Math.random para a props pelo onClicar no componente Sub dentro de Super */}
        </div>
    )

    //Outra forma de fazer

    // return(
    //     <div>
    //         <button onClick={() => {
    //             props.onClicar(Math.random()) //Ao clicar, irá passar a informação do Math.random para o Super através da props onClicar
    //         }}>Alterar</button>
    //     </div>
    // )
}
