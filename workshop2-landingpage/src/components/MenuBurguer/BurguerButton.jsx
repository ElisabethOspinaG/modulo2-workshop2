import React from 'react'
import { Burger } from './StylesButtonHamburguer'


const BurguerButton = (props) => {
    return (
        <Burger>
            <div onClick={props.handleClick} class={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burger>

    )
}

export default BurguerButton
