import React, { useState } from 'react';
// import './style.css';

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function handleCreateRandomColor(){

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
        <button onClick={() ={typeOfColor === 'hex' ? handleCreateHexRandomColor : handleCreateRgbRandomColor()}>Generate Random Color</button>
        <button onClick={() => setTypeOfColor('hex')}>HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>RGB Color</button>
    </div>
}