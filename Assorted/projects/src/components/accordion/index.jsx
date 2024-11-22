import React, { useState } from 'react';
import data from "./data";
import './style.css';

export default function Accordion() {
    const [selected, setSelected] = useState(null); // For single selection
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false); // Toggle selection mode
    const [multiple, setMultiple] = useState([]); // For multiple selection

    function handleSingleSelection(id) {
        setSelected(id === selected ? null : id);
    }

    function handleMultipleSelection(id) {
        const updatedSelection = multiple.includes(id)
            ? multiple.filter(itemId => itemId !== id) // Remove ID if already selected
            : [...multiple, id]; // Add ID if not selected
        setMultiple(updatedSelection);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>
                {enableMultipleSelection ? "Disable" : "Enable"} Multiple Selection
            </button>

            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map(dataItem => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick={() =>
                                    enableMultipleSelection
                                        ? handleMultipleSelection(dataItem.id)
                                        : handleSingleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>

                            {(selected === dataItem.id || multiple.includes(dataItem.id)) && (
                                <div className="content">{dataItem.answer}</div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}
