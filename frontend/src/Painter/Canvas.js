import React, {useEffect} from 'react'
import { getState } from '../Stores/WindowStore'

let canvas = {};
let ctx = {};
let isMouseDown=false;

const getMousePos = (e) => {
    let rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

const mousedown = (e) => {
    isMouseDown=true
    var currentPosition = getMousePos(e);
    ctx.moveTo(currentPosition.x, currentPosition.y)
    ctx.beginPath();
    let eraserActive = getState('eraserActive');
    ctx.lineWidth  = eraserActive ? 50 : getState('paintSize');
    ctx.lineCap = "round";
    ctx.strokeStyle = eraserActive ? getState('bgColor') : getState('paintColor');
}


const mouseup = () => {
    isMouseDown=false
}

const mousemove = (e) => {
    if(isMouseDown){
        var currentPosition = getMousePos(e);
        ctx.lineTo(currentPosition.x, currentPosition.y)
        ctx.stroke();
    }
}

export const getImage = () => {
    let img = document.getElementById('canvas2').toDataURL('image/jpeg', 0.1);
    return img;
}

const Canvas = () => {
    useEffect(() => {
        canvas = document.getElementById('canvas2'); //TODO React måste ha ett snyggare sätt än detta?
        ctx = canvas.getContext("2d");
        ctx.fillStyle = getState('bgColor');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    return (
        <canvas 
            id="canvas2" 
            width="800"
            height="800"
            onMouseDown={mousedown}
            onMouseMove={mousemove}
            onMouseUp={mouseup}
        />
    )
}

export default Canvas