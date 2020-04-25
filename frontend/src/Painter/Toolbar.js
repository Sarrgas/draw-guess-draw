import React from 'react'
import {getState, setState} from '../Stores/WindowStore'
import { FaEraser } from 'react-icons/fa';
import { GrClear } from 'react-icons/gr'

const setColor = (e) => {
    setState('paintColor', e.target.value)
}

const setBgColor = (e) => {
    setState('bgColor', e.target.value)
    // var canvas = document.getElementById("canvas");
    // var ctx = canvas.getContext("2d");
    // // Add behind elements.
    // ctx.globalCompositeOperation = 'destination-over'
    // // Now draw!
    // ctx.fillStyle = "blue";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const eraser = () => {
    let eraserActive = getState('eraserActive');
    setState('eraserActive', !eraserActive);
}

const setSize = (e) => {
    setState('paintSize', e.target.value)
    document.getElementById('showSize').innerHTML = e.target.value
}

const clearCanvas = () => {
    console.error('Not implemented!');
}

const Toolbar = () => {
    return (
        <div>
            <div className="colorButtons">
                <h3>Colour</h3>
                <input type="color" id="colorpicker" value={getState('paintColor')} className="colorpicker" onChange={setColor}/>
            </div>
            <div className="colorButtons">
                <h3>Background</h3>
                <input type="color" id="bgcolorpicker" value={getState('bgColor')} className="colorpicker" onChange={setBgColor}/>
            </div>

            <div className="toolsButtons">
                <h3>Tools</h3>
                <button id="eraser" className={`btn ${getState('eraserActive') ? "btn-primary" : "btn-default"}`} onClick={eraser}><FaEraser /></button>
                <button id="clear" className="btn btn-danger" onClick={clearCanvas}> <GrClear /></button>
            </div>

            <div className="buttonSize">
                <h3>Size (<span id="showSize">{getState('paintSize')}</span>)</h3>
                <input type="range" min="1" defaultValue={getState('paintSize')} max="50" step="1" id="controlSize" onChange={setSize} />
            </div>
        </div>
    )
}

export default Toolbar