import React, { useState } from 'react';
import data from "./data";
import './style.css';

// single selection
// multiple selection

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(id){
        setSelected(id === selected ? null : id);
    }

    function handleMultipleSelection(id) {
        let copyMultiple = [...multiple];
        const IndexCurrentId = copyMultiple.indexOf(id);

        if(IndexCurrentId === -1)
            copyMultiple.push(id)
        else   
            copyMultiple.splice(IndexCurrentId, 1)
        setMultiple(copyMultiple);
    }
    console.log(selected,multiple);


    return <div className="wrapper">
        <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>Enable Multiple Selection</button>
        <div className='accordion'>
            {
                data && data.length > 0 ? data.map(dataItem=>
                <div className='item'>
                    <div onClick={
                        enableMultipleSelection
                            ? () => handleSingleSelection(dataItem.id)
                            : () => handleMultipleSelection(dataItem.id)
                    }
                        className='title'
                >
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className='content'>{dataItem.answer}</div>
                        : null
                    }
                </div>)
                :<div>No data found</div>
            }
        </div>
    </div>;
}