import React from 'react'

export default props =>
    <React.Fragment>
        <div>
            <h2>Os filhos</h2>
            <div>
                {props.children} {/* Renderiza o filho, ou seja, o que tiver dentro do componente/tag */}
            </div>
        </div>
    </React.Fragment>