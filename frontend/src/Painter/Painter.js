import React from 'react'

var isMouseDown=false;
var canvas = document.createElement('canvas');
var body = document.getElementsByTagName("body")[0];
var ctx = canvas.getContext('2d');
var currentSize = 5;
var currentColor = "rgb(0,0,0)";
var currentBg = "white";
var eraserActive = false;

createCanvas();

function createCanvas() {
    canvas.id = "canvas";
    canvas.width = 800;
    canvas.height = 800;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";
    ctx.fillStyle = currentBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    body.appendChild(canvas);
}

canvas.addEventListener('mousedown', function(e) {mousedown(canvas, e);});
canvas.addEventListener('mousemove',function(e) {mousemove(canvas, e);});
canvas.addEventListener('mouseup',mouseup);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function downloadCanvas(link) {
    var imgpng = document.getElementById('canvas').toDataURL();
    console.log(imgpng);
    var lowQuality = document.getElementById('canvas').toDataURL('image/jpeg', 0.1);
    console.log(lowQuality)
    var img = document.createElement('img');
    img.src=imgpng;
    img.width = 100;
    img.height = 100;
    var imagesdiv = document.getElementById('images')
    imagesdiv.appendChild(img);
}

function eraser() {
    if (eraserActive) {
        eraserActive = false;
        currentSize = 5
        currentColor = "rgb(0,0,0)"
    }
    else {
        eraserActive = true;
        currentSize = 50;
        currentColor = ctx.fillStyle
    }
}

function mousedown(canvas, evt) {
    isMouseDown=true
    var currentPosition = getMousePos(canvas, evt);
    ctx.moveTo(currentPosition.x, currentPosition.y)
    ctx.beginPath();
    ctx.lineWidth  = currentSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;

}

function mouseup() {
    isMouseDown=false
}

function mousemove(canvas, evt) {

    if(isMouseDown){
        var currentPosition = getMousePos(canvas, evt);
        ctx.lineTo(currentPosition.x, currentPosition.y)
        ctx.stroke();
    }
}

const setColor = (e) => {
    currentColor = e.target.value
}

const setSize = (e) => {
    currentSize = e.target.value
    document.getElementById('showSize').innerHTML = e.target.value
}

const painter = () => {
    return (
    <div id="sidebar">
        <div className="colorButtons">
            <h3>Colour</h3>
            <input type="color" id="colorpicker"  className="colorpicker" onChange={setColor}/>
        </div>
        <div className="colorButtons">
            <h3>Bg Color</h3>
            <input type="color" value="#ffffff" id="bgcolorpicker" className="colorpicker" />
        </div>

        <div className="toolsButtons">
            <h3>Tools</h3>
            <button id="eraser" className="btn btn-default" onClick={eraser}><span className="glyphicon glyphicon-erase" style={{backgroundColor: eraserActive && 'blue'}}  aria-hidden="true"></span></button>
            <button id="clear" className="btn btn-danger"> <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span></button>
        </div>

        <div className="buttonSize">
            <h3>Size (<span id="showSize">{currentSize}</span>)</h3>
            <input type="range" min="1" defaultValue={currentSize} max="50" step="1" id="controlSize" onChange={setSize} />
        </div>
        <div className="Storage">
            <h3>Storage</h3>
            <input type="button" value="Save" className="btn btn-warning" id="save" />
            <input type="button" value="Load" className="btn btn-warning" id="load" />
            <input type="button" value="Clear" className="btn btn-warning" id="clearCache" />
        </div>
        <div className="extra">
            <h3>Extra</h3>
            <a id="saveToImage" className="btn btn-warning" onClick={downloadCanvas}>Download</a>
        </div>
        <div id="images">

        </div>
    
    </div>
)
}

export default painter