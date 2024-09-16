import './Card.css'

function Card({name}) {




    return(
        <button className="card" key={name}>{name}</button>
    )
}

export default Card