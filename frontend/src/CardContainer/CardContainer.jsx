import Card from "./Card/Card"
import {answers} from "../Game/Game"

import "./CardContainer.css"

function CardContainer() {
    return (
        <div className="card-container">
            {answers.map((answer) => {
                return <Card key={answer.player} name={answer.player} categoryTitle={answer.category} />
            })}
        </div>
    )
}

export default CardContainer