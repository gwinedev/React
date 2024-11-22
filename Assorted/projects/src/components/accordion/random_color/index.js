import React, { useState } from 'react';
// import './style.css';

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
    // const [colorName, setColorName] = useState('#000000')

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateHexRandomColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }

        setColor(hexColor);
        // setColorName(hexColor);
    }

    function handleCreateRgbRandomColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb${r}, ${g}, ${b}`);
    }


    return <div style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontFamily: "Arial, san serif"

    }}
    >
        <span style={{color:"white", display:"flex", fontSize:"30px"}}>{color}</span>
        <button onClick={typeOfColor === 'hex' ? handleCreateHexRandomColor : handleCreateRgbRandomColor()}>Generate Random Color</button>
        <button onClick={() => setTypeOfColor('hex')}>HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>RGB Color</button>
    </div>
}