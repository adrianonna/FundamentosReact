import React from 'react'

export default (props) => {
    return(
    <React.Fragment> 
        <div>
            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
        </div>
    </React.Fragment>
    )
}