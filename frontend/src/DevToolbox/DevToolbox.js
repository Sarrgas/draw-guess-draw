import React from 'react'
import {getImage, postImage} from '../Network/Network'
import {setState} from '../Stores/WindowStore'
import {getImage as Canvas} from '../Painter/Canvas'

const apiGetImage = () => {
    const num = document.getElementById('number').value
    const img = getImage(num)
    setState('currentImage', img)
}

const apiPostImage = () => {
    const img = Canvas()
    postImage(img)
}

const DevToolbox = () => {
    return (
        <div> 
            <div>
                <input type="number" id="number"></input>
                <button id="dummy" onClick={apiGetImage} > Dummy api GET </button>
            </div>
            <div>
                <input type="text" id="playername" defaultValue="Player name"></input>
                <input type="number" id="playerid" defaultValue="0"></input>
            </div>
            <button id="dummy" onClick={apiPostImage} > Dummy api POST </button>
        </div>
    )
}

export default DevToolbox