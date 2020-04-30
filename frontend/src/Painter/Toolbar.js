import React from 'react'
import {getState, setState} from '../Stores/WindowStore'
import { FaEraser } from 'react-icons/fa';
import { GrClear } from 'react-icons/gr'
import { clearCanvas } from './Canvas'
import {getImage, postImage} from '../Network/Network'

const setColor = (e) => {
    setState('paintColor', e.target.value)
}

const setBgColor = (e) => {
    setState('bgColor', e.target.value)
    
}

const eraser = () => {
    let eraserActive = getState('eraserActive');
    setState('eraserActive', !eraserActive);
}

const setSize = (e) => {
    setState('paintSize', e.target.value)
    document.getElementById('showSize').innerHTML = e.target.value
}

const Toolbar = () => {
    return (
        <div>
            <div className="colorButtons">
                <h3>Colour</h3>
                <input type="color" id="colorpicker" defaultValue="#000000" className="colorpicker" onChange={setColor}/>
            </div>
            <div className="colorButtons">
                <h3>Background</h3>
                <input type="color" id="bgcolorpicker" defaultValue="#ffffff" className="colorpicker" onChange={setBgColor}/>
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