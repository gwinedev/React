import React from "react";

export default function App() {
    const firstName = "Godwin"
    const lastName = "Okoeguale"
    const hours = new Date().getHours()

    let timeOfDay

    if(hours < 12) {
        timeOfDay = "Morning"
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    }
    else{
        timeOfDay = "Evening"
    }
    return (
        <>
            <div className="contacts">
                <article></article>

            </div>
        </>
    )
}
