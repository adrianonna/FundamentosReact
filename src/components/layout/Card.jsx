import './Card.css'
import React from 'react'

export default props =>
    <div className="Card">
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer">
            {props.tituloFooter}
        </div>
    </div>