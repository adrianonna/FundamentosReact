import React from 'react'
import Filho from './Filho'

export default props =>
<div>
    {/* Está renderizando o elemento Filho passando seu conteúdo (João, Maria e Pedro) como children no componente Filho */}
    {/* Bem como também passar o valor de sobrenome (Silva) pela props para o componente Filho */}
    <Filho {...props}><u>João</u></Filho> {/* Passando a propriedade do componente Pai em App para o Filho */}
    <Filho sobrenome={props.sobrenome}>Maria</Filho> {/* Outra forma de passar a propriedade do componente Pai em App para o Filho */}
    <Filho sobrenome="Silva">Pedro</Filho>
</div>