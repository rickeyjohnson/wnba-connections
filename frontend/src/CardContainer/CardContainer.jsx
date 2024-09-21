import React, { useState, useCallback } from "react";
import { answers } from "../Game/Game";
import "./CardContainer.css";

function CardContainer() {
    // Initialize state to keep track of selected buttons
    const [selectedButtons, setSelectedButtons] = useState({});

    // Memoize the handleClick function using useCallback to avoid unnecessary re-creations
    const handleClick = useCallback((index) => {
        setSelectedButtons((prevSelected) => ({
            ...prevSelected,
            [index]: !prevSelected[index] // Toggle selection for the clicked button
        }));
    }, []);

    // Map over the answers array and render buttons
    return (
        <div className="card-container">
            {answers.map((answer, index) => {
                const name = answer.player;
                const category = answer.category;

                return (
                    <button
                        key={name}
                        className={`card ${category} ${selectedButtons[index] ? "selected" : ""}`} // Conditionally add "selected" class
                        onClick={() => handleClick(index)}
                    >
                        {name}
                    </button>
                );
            })}
        </div>
    );
}

export default CardContainer;