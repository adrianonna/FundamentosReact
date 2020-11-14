import React from 'react'

export default (props) => {
    return(
    <React.Fragment> 
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number"
                style={{fontSize: '1.4rem', width: '60px'}}
                value={props.passo}
                onChange={e => props.onPassoChance(+e.target.value)}/>
        </div>
    </React.Fragment>
    )
}