import { useState } from 'react'
import './Card.css'

function Card({name, category, isSelected, onclick}) {

    let className = "card"

    if (isSelected) {
        className += " selected"
    } else {
        className.replace("selected", "")
    }

    return(
        <button className={className} onClick={onclick}>{name}</button>
    )
}

export default Card