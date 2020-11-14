import React from 'react'

//Arrow function
export default param => {//param é uma props, ou seja, um parâmetro, uma variável que recebe os parâmetros vindo nesse caso do componente ComParamentro no index.js
    //param/props é somente leirura, código a baixo não funciona
    //param.titulo = "Outro Título"
    return(
    <React.Fragment> 
        <h3>{param.titulo}</h3>
        <p>{param.subtitulo}</p>
    </React.Fragment>
    )
}