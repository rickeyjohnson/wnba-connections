import { useState } from 'react'
import './Card.css'

function Card({name, categoryTitle}) {

    let [className, selectCard] = useState("card " + categoryTitle)

    const updateSelected = () => {
        console.log(name + " was clicked")
        
        if (className.includes("selected")) {
            selectCard(className.replace("selected", ""))
        } else {
            selectCard(className += " selected")
        }
    }

    return(
        <button className={className} key={name} onClick={updateSelected}>{name}</button>
    )
}

export default Card