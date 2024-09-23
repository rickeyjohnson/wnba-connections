import SubmitButton from "./Submit/SubmitButton"
import ShuffleButton from "./Shuffle/ShuffleButton"
import './ButtonContainer.css'

function ButtonContainer() {

    return (
        <div className="btn-container">
            <ShuffleButton />
            <SubmitButton />
        </div>
    )
}

export default ButtonContainer